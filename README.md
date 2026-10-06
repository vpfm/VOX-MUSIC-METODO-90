# Método 90 — Área do Artista V1.1

Protótipo para apresentação e deploy no Render, agora com tela de login da Área do Artista.

## Acesso inicial de demonstração
- Usuário: `artista`
- Senha: `Metodo90@2026`

> Para uso real, altere `ARTIST_USER` e `ARTIST_PASSWORD` nas Environment Variables do Render. Não reutilize a senha de demonstração.

## Render
1. Suba estes arquivos para um repositório GitHub.
2. No Render, crie um Web Service apontando para o repositório, ou use o `render.yaml` como Blueprint.
3. Build: `npm install`
4. Start: `npm start`
5. Após o deploy, abra a URL do serviço. O acesso será redirecionado para `/login`.

## Segurança desta versão
A autenticação usa sessão HTTP-only. Esta V1.1 possui um único acesso de artista para demonstração. A versão multiartista deverá usar banco de dados, senhas com hash e contas individuais.

## V1.3 — Afinador e materiais
- Afinador interativo no navegador: toca nota de referência e usa o microfone para indicar abaixo/próxima/acima.
- Fundamentos musicais adicionados ao início da jornada: música, melodia, ritmo, afinação, notas e solfejo.
- Materiais de apoio adicionados ao cronograma, com referências da Berklee Online, NIDCD/NIH e YouTube Creator Help.
- O afinador precisa de HTTPS (o Render fornece) e permissão do microfone no navegador.
