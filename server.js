const express = require('express');
const session = require('express-session');
const QRCode = require('qrcode');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
  secret: process.env.SESSION_SECRET || 'metodo90-demo-secret-trocar-no-render',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 1000*60*60*12 }
}));

const ARTIST_USER = process.env.ARTIST_USER || 'artista';
const ARTIST_PASSWORD = process.env.ARTIST_PASSWORD || 'Metodo90@2026';

app.get('/login', (req,res)=>res.sendFile(path.join(__dirname,'public','login.html')));
app.post('/api/login',(req,res)=>{
  const {usuario,senha}=req.body || {};
  if(usuario===ARTIST_USER && senha===ARTIST_PASSWORD){
    req.session.authenticated=true;
    req.session.role='artist';
    return res.json({ok:true});
  }
  res.status(401).json({ok:false,message:'Usuário ou senha incorretos.'});
});
app.post('/api/logout',(req,res)=>req.session.destroy(()=>res.json({ok:true})));
app.get('/api/session',(req,res)=>res.json({authenticated:!!req.session.authenticated,role:req.session.role||null}));

function requireAuth(req,res,next){
  if(req.session && req.session.authenticated) return next();
  if(req.path.startsWith('/api/')) return res.status(401).json({ok:false,message:'Acesso não autorizado.'});
  return res.redirect('/login');
}

// Arquivos necessários à tela de login ficam públicos.
app.get('/login.css',(req,res)=>res.sendFile(path.join(__dirname,'public','login.css')));
app.use(requireAuth);
app.use(express.static(path.join(__dirname, 'public'), {index:false}));

app.get('/api/qr', async (req,res)=>{
  try {
    const url = String(req.query.url || '');
    if(!/^https?:\/\//i.test(url)) return res.status(400).send('URL inválida');
    const png = await QRCode.toBuffer(url,{width:320,margin:2});
    res.type('png').send(png);
  } catch(e){ res.status(500).send('Erro ao gerar QR'); }
});
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Método 90 rodando na porta ${port}`));
