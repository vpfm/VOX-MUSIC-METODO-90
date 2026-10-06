const express = require('express');
const QRCode = require('qrcode');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const ARTIST_USER = String(process.env.ARTIST_USER || 'artista').trim();
const ARTIST_PASSWORD = String(process.env.ARTIST_PASSWORD || 'Metodo90@2026');
const AUTH_SECRET = String(process.env.SESSION_SECRET || 'vox-music-metodo90-v16-change-me');
const COOKIE_NAME = 'vox_auth';
const MAX_AGE_SECONDS = 60 * 60 * 12;

function parseCookies(req) {
  const out = {};
  const raw = req.headers.cookie || '';
  raw.split(';').forEach(part => {
    const i = part.indexOf('=');
    if (i < 0) return;
    const k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  });
  return out;
}

function b64url(input) {
  return Buffer.from(input).toString('base64url');
}
function sign(payloadB64) {
  return crypto.createHmac('sha256', AUTH_SECRET).update(payloadB64).digest('base64url');
}
function makeToken(user) {
  const payload = b64url(JSON.stringify({ user, role:'artist', exp: Math.floor(Date.now()/1000) + MAX_AGE_SECONDS }));
  return `${payload}.${sign(payload)}`;
}
function verifyToken(token) {
  try {
    if (!token || !token.includes('.')) return null;
    const [payload, sig] = token.split('.');
    const expected = sign(payload);
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a,b)) return null;
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!data.exp || data.exp < Math.floor(Date.now()/1000)) return null;
    if (data.user !== ARTIST_USER || data.role !== 'artist') return null;
    return data;
  } catch { return null; }
}
function authFromRequest(req) {
  return verifyToken(parseCookies(req)[COOKIE_NAME]);
}
function cookieOptions(req) {
  const forwarded = String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim();
  const secure = req.secure || forwarded === 'https';
  return { httpOnly:true, sameSite:'lax', secure, path:'/', maxAge:MAX_AGE_SECONDS*1000 };
}

app.get('/login', (req,res) => {
  if (authFromRequest(req)) return res.redirect('/');
  res.sendFile(path.join(__dirname,'public','login.html'));
});
app.get('/login.css', (req,res) => res.sendFile(path.join(__dirname,'public','login.css')));

app.post('/api/login', (req,res) => {
  const usuario = String(req.body?.usuario ?? '').trim();
  const senha = String(req.body?.senha ?? '');
  const valid = usuario === ARTIST_USER && senha === ARTIST_PASSWORD;
  console.log(`[LOGIN V1.6] tentativa user=${usuario || '(vazio)'} valid=${valid ? 'SIM' : 'NAO'}`);
  if (!valid) return res.status(401).json({ok:false,message:'Usuário ou senha incorretos.'});
  const token = makeToken(ARTIST_USER);
  res.cookie(COOKIE_NAME, token, cookieOptions(req));
  console.log(`[LOGIN V1.6] cookie emitido secure=${cookieOptions(req).secure ? 'SIM' : 'NAO'}`);
  return res.json({ok:true,redirect:'/'});
});

app.get('/api/session', (req,res) => {
  const auth = authFromRequest(req);
  console.log(`[AUTH V1.6] verificacao=${auth ? 'AUTENTICADA' : 'NAO AUTENTICADA'}`);
  res.set('Cache-Control','no-store');
  res.json({authenticated:!!auth,role:auth?.role || null,user:auth?.user || null});
});

app.post('/api/logout', (req,res) => {
  const opts = cookieOptions(req);
  res.clearCookie(COOKIE_NAME,{httpOnly:true,sameSite:'lax',secure:opts.secure,path:'/'});
  res.json({ok:true});
});

function requireAuth(req,res,next) {
  if (authFromRequest(req)) return next();
  console.log(`[AUTH V1.6] bloqueado ${req.method} ${req.originalUrl}`);
  if (req.originalUrl.startsWith('/api/')) return res.status(401).json({ok:false,message:'Acesso não autorizado.'});
  return res.redirect('/login');
}

app.use(requireAuth);
app.use(express.static(path.join(__dirname,'public'),{index:false}));

app.get('/api/qr', async (req,res) => {
  try {
    const url = String(req.query.url || '');
    if (!/^https?:\/\//i.test(url)) return res.status(400).send('URL inválida');
    const png = await QRCode.toBuffer(url,{width:320,margin:2});
    res.type('png').send(png);
  } catch { res.status(500).send('Erro ao gerar QR'); }
});

app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));

const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`Vox Music Método 90 V1.6 rodando na porta ${port}`);
  console.log(`[CONFIG] ARTIST_USER=${ARTIST_USER ? 'OK' : 'AUSENTE'} PASSWORD=${ARTIST_PASSWORD ? 'OK' : 'AUSENTE'} SECRET=${AUTH_SECRET ? 'OK' : 'AUSENTE'}`);
});
