# VOX MUSIC — Método 90 — V1.15

Versão de apresentação com a Área do Artista preservada.

## Alteração desta versão
- Removida a visualização geral de semanas/dias da jornada.
- Removidos os botões Dia anterior / Próximo dia do modo de apresentação.
- Mantido somente o seletor **Modo Apresentação → Mostrar o dia**, para escolher qualquer Dia 1–90 durante reunião com os empresários.
- Na experiência real do artista, a proposta continua sendo exibir somente o dia liberado.
- Mantidos os recursos de afinação e solfejo da V1.14.
- Cache de arquivos estáticos desativado para evitar que o navegador continue exibindo layout de versões anteriores após o deploy.


## V1.16 — Instagram / Plano de Crescimento
- Adiciona navegação independente Treinamento e Instagram, sem alterar o código do treinamento.
- Primeira semana cadastrada integralmente com cenas, Stories, falas, durações e legendas.
- Checklist, status e observações persistidos no localStorage do navegador. **Não sincroniza entre aparelhos ou usuários**; a V1.15 não dispõe de banco de dados ou endpoints para esse fluxo.
- Semanas 2 a 4 aguardam roteiros aprovados.
- Arquivos modificados: public/index.html. Arquivos novos: public/instagram.js, public/instagram-data.js, public/instagram.css.


## V1.18 — Liberação progressiva
Planejamento dos dias 1 a 30 disponível no código. Semana seguinte abre somente quando TODOS os dias da anterior estiverem com status Publicado e as cenas, Stories e publicações marcados. Domingo não exige Reel. Os registros são salvos apenas neste navegador (localStorage), sem sincronização multiusuário nem autorização de gestor. As semanas 2–4 contêm roteiros propostos e precisam de revisão editorial antes do uso.


V1.19: removido o painel inferior MODO APRESENTACAO / Mostrar o dia da interface de treinamento. Mantidos os demais modulos.


## V1.20 — Início oficial limpo
- Limpeza automática e única, neste navegador, das chaves locais `m90_*` e `ouribo_instagram_*` provenientes dos testes.
- Primeiro acesso após atualização: Dia 1, Semana 1, 0/90 concluídos; Instagram começa na Semana 1.
- O próximo dia é calculado pelos dias concluídos em sequência, sem usar o antigo seletor de demonstração.
- Após concluir o dia, avança automaticamente para o próximo pendente.
- Dados novos não são apagados nas visitas seguintes, graças ao marcador `vox_m90_official_reset_v120`.
- ATENÇÃO: o armazenamento é por navegador/aparelho. Publicar a atualização não apaga dados de outros navegadores até que cada um acesse a nova versão. Não há banco de dados persistente de atividades no servidor desta versão.
- A limpeza é deliberadamente destrutiva para os dados locais de teste; não publicar se existirem dados reais que precisem ser preservados.
