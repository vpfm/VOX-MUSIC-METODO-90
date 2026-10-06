const WEEKS=[
['Primeiros passos','Conhecer sua história, sua voz e sua rotina atual.'],['Fundamentos','Criar bons hábitos de voz, respiração e estudo.'],['Repertório e interpretação','Aprender músicas e começar a interpretar.'],['Comunicação inicial','Câmera, Stories e primeira entrevista de rádio.'],['Interpretação e identidade','Dar intenção às músicas e fortalecer sua identidade.'],['Imagem e câmera','Figurino, postura, Stories e Reel musical.'],['Preparação para mídia','Rádio, podcast, TV e programa de auditório.'],['Palco','Entrada, microfone, interação e mini-show.'],['Repertório profissional','Organizar e testar o repertório do projeto.'],['Preparação de estúdio','Entender e praticar o processo de gravação.'],['Conteúdo e lançamento','Aprender a comunicar uma música ao público.'],['Mídia profissional e show','Treinos avançados e Show V1/V2.'],['Certificação','Comparar sua evolução e preparar a próxima fase.']
];
const themes=[
['Vamos conhecer você','Hoje vamos registrar seu ponto de partida. Isso ajuda sua equipe a entender onde você está agora e acompanhar sua evolução.'],
['Primeiros cuidados com a voz','Hoje vamos criar bons hábitos para usar sua voz com mais consciência e segurança.'],
['Vamos aprender uma música','Hoje vamos estudar uma música em pequenas partes para facilitar a memorização.'],
['Afinação e percepção','Hoje vamos treinar sua percepção musical para você identificar melhor as notas e corrigir trechos.'],
['Vamos falar para a câmera','Hoje vamos descobrir como você se comunica naturalmente diante da câmera.'],
['Minha primeira avaliação','Hoje vamos revisar a semana e registrar sua evolução.'],
['Recuperação','Hoje não temos atividade obrigatória. Descanso também faz parte da preparação profissional.']
];
const month2=[
'Interpretação: fazer a música ter verdade','Expressão: rosto e corpo também comunicam','Música nova: conhecer e testar','Dicção e clareza','Interpretando para a câmera','Mini apresentação de 3 músicas','Recuperação',
'Como você aparece?','Teste de figurino','Falando com a câmera','Primeiro Story profissional','Reel musical','Foto e postura','Recuperação',
'Entrevista de rádio','Melhorando minhas respostas','Treino de podcast','Treino de televisão','Programa de auditório','Perguntas inesperadas','Recuperação',
'Entrada de palco','Microfone e movimentação','Falar entre músicas','Construindo emoção','Energia no palco','Mini-show','Recuperação','Correções personalizadas','Desafio dos 60 dias'];
const month3=[
'Organizar meu repertório','Música nova para o projeto','Interpretando minha música','Cantar sem depender da letra','Meu repertório no palco','Avaliação do repertório','Recuperação',
'Como funciona uma gravação?','Música de trabalho','Ajustes de interpretação','Simulação de estúdio','Gravação ou ensaio dirigido','Escuta crítica','Recuperação',
'Contar a história da música','Criar um teaser','Conteúdo musical','Mostrar bastidores','Divulgar sem parecer decorado','Simulação de lançamento','Recuperação',
'Entrevista de rádio: lançamento','Podcast profissional','Entrevista de TV','Perguntas difíceis','Show V1','Corrigir meu show','Show V2','Simulação profissional','Minha evolução — Dia 90'];
function dayTitle(d){if(d<=7)return themes[d-1][0];if(d<=30){const seq=['Preparação vocal + respiração + Música 1','Percepção/afinação + Música 1','Dicção + Música 1','Interpretação da letra','Juntar verso e refrão + câmera','Música 1 completa','Recuperação','Nova música + refrão','Memorização da Música 2','Interpretação da Música 1','Música 2 + dicção','Músicas 1 e 2 + câmera','Avaliação das duas músicas','Recuperação','Voz + falar 30 segundos','Aprender a se apresentar','Contar sua história em 1 minuto','Simulação de Story','Primeira entrevista de rádio','Avaliação mensal','Recuperação','Reforço personalizado','Minha evolução — 30 dias'];return seq[d-8];}if(d<=60)return month2[d-31];return month3[d-61];}
function why(d){if(d<=7)return themes[d-1][1]; if([7,14,21,28,37,44,51,58,67,74,81].includes(d))return 'Hoje é um dia leve. Recuperar corpo e voz ajuda você a manter uma rotina sustentável.'; if(d>=45&&d<=51)return 'Este treino ajuda você a falar com naturalidade quando chegar a hora de participar de entrevistas e divulgar seu trabalho.'; if(d>=52&&d<=58)return 'Hoje vamos transformar o que você já aprendeu em presença de palco e comunicação com o público.'; if(d>=68&&d<=74)return 'Hoje vamos aproximar você da rotina de estúdio para que chegue mais preparado quando for gravar profissionalmente.'; if(d>=75&&d<=81)return 'Hoje vamos aprender a apresentar sua música ao público de forma natural, clara e interessante.'; if(d>=82&&d<=88)return 'Hoje vamos simular situações profissionais de mídia e palco para aumentar sua segurança.'; return 'Esta atividade faz parte da sua evolução profissional e prepara a próxima etapa da sua carreira.';}

const RES={
 voice:'https://www.youtube.com/watch?v=xytuXfJO3D4', // Gláucia Quites — aquecimento vocal
 breath:'https://www.youtube.com/watch?v=uMV0wx6ao5M', // Descomplicando a Música — respiração diafragmática prática
 ear:'https://www.youtube.com/watch?v=vgoPjhyatcs', // Leandro Voz — estágios da afinação
 earPractice:'https://www.youtube.com/watch?v=zATt6sMW8Tk', // Descomplicando a Música — exercícios de afinação
 theory:'https://www.youtube.com/watch?v=SGF0-SJVqBg', // Decifrei — melodia, harmonia e ritmo
 camera:'https://www.youtube.com/watch?v=jurPLpKOWMk', // Paulo Moreno — gravação com celular
 filming:'https://www.youtube.com/watch?v=z5Bz5iXwYLw', // Lívia Brasil — Reels
 microphone:'https://www.youtube.com/watch?v=dU_k9XXHzbY' // Atelier de La Musique — uso do microfone
};
function resourceFor(d){
 // V1.11: nenhum vídeo é aplicado genericamente a uma faixa de dias.
 // Só há link quando o conteúdo foi revisado e corresponde exatamente à atividade.
 if(d===1)return RES.voice;
 if(d===2)return RES.theory;
 if(d===4)return RES.ear;
 if([8,9].includes(d))return RES.earPractice;
 if(d===53)return RES.microphone; // dia específico: Microfone e movimentação
 return null;
}

function activitiesFor(d){
 if([7,14,21,28,37,44,51,58,67,74,81].includes(d)) return [{icon:'🌿',title:'Recuperação',mins:10,desc:'Sem treino obrigatório. Faça apenas cuidados leves e registre se sentiu cansaço ou desconforto durante a semana.',steps:['Descanse a voz de esforços desnecessários.','Hidrate-se normalmente.','Se houver desconforto persistente, avise sua equipe.']}];
 if(d===1)return [
 {icon:'🎥',title:'Minha história',mins:10,desc:'Conte quem é você hoje. Não decore.',steps:['Diga seu nome artístico e de onde você é.','Conte como começou a cantar.','Diga onde gostaria de chegar com sua carreira.'],deliver:'Gravar vídeo'},
 {icon:'🎤',title:'Minha voz hoje',mins:15,desc:'Escolha uma música confortável. Esta gravação será nosso ponto de partida.',steps:['Escolha uma música que conhece bem.','Grave sem efeitos ou correções.','Cante de forma natural.'],deliver:'Enviar gravação'},
 {icon:'📚',title:'Cuidados básicos com a voz',mins:15,desc:'Aprenda por que preparação, descanso e técnica são importantes.',steps:['Assista ao material.','Anote uma dúvida se houver.'],link:'https://www.youtube.com/watch?v=xytuXfJO3D4',deliver:'Marcar como assistido'},
 {icon:'⭐',title:'Minhas referências',mins:15,desc:'Escolha 3 artistas que você admira.',steps:['Escolha 3 nomes.','Explique o que chama sua atenção em cada um.'],deliver:'Enviar resposta'}];
 if(d===2)return [{icon:'🎼',title:'O que é música, melodia e ritmo?',mins:12,desc:'Antes de avançar, vamos entender três ideias básicas que você usará durante toda a jornada.',steps:['Música organiza sons e silêncios.','Melodia é a sequência de alturas que você canta ou assobia.','Ritmo organiza os sons no tempo.','Ouça uma música conhecida e bata palmas acompanhando o pulso.'],link:'https://www.youtube.com/watch?v=SGF0-SJVqBg',deliver:'Concluir prática'},{icon:'🌬️',title:'Respiração para o canto',mins:10,desc:'Vamos entender melhor o controle do ar no canto.',steps:['Observe a demonstração.','Repita com calma e sem exagerar a quantidade de ar.'],link:RES.breath,deliver:'Concluir'},{icon:'🎵',title:'Aplicar na música',mins:15,desc:'Cante um trecho da música do Dia 1 sem buscar potência.',steps:['Escolha um trecho confortável.','Perceba a melodia e marque o ritmo com a mão.','Grave uma tentativa.'],deliver:'Enviar áudio'},{icon:'🙂',title:'Como me senti?',mins:3,desc:'Conte como sua voz respondeu hoje.',steps:['Marque: muito confortável, confortável, cansativo ou desconfortável.'],deliver:'Responder'}];

 if(d===4)return [{icon:'🎯',title:'Vamos entender afinação',mins:12,desc:'Afinação é a capacidade de ouvir uma altura e reproduzi-la com precisão. Vamos treinar ouvido e voz sem forçar.',steps:['Ouça a nota de referência.','Espere um instante.','Cante a mesma nota.','Observe se ficou abaixo, próxima ou acima.'],link:'https://www.youtube.com/watch?v=vgoPjhyatcs',deliver:'Fazer teste',pitchTrainer:true,targetNote:'C4'},{icon:'🎼',title:'Solfejo inicial',mins:15,desc:'Ouça e repita pequenas sequências: Dó–Ré–Mi–Fá–Sol; Dó–Ré–Mi–Ré–Dó; Dó–Mi–Sol–Mi–Dó.',steps:['Ouça a referência na ferramenta.','Repita uma sequência de cada vez.','Faça 3 tentativas sem buscar volume.'],link:RES.earPractice,deliver:'Concluir solfejo',pitchTrainer:true,targetNote:'C4'},{icon:'🎵',title:'Aplicar no repertório',mins:15,desc:'Agora leve a percepção para um trecho curto da música em estudo.',steps:['Ouça uma frase curta.','Pause.','Tente reproduzir a melodia.','Grave a melhor tentativa.'],deliver:'Enviar áudio'}];
 if(d===8)return [{icon:'🎼',title:'Conhecendo as notas',mins:15,desc:'Hoje vamos reconhecer Dó, Ré, Mi, Fá, Sol, Lá e Si e relacionar o que ouvimos com o que cantamos.',steps:['Use o afinador abaixo.','Ouça Dó e tente reproduzir.','Repita com Ré, Mi, Fá e Sol em região confortável.'],link:RES.earPractice,deliver:'Concluir',pitchTrainer:true,targetNote:'C4'},{icon:'🎵',title:'Música 1 — primeiro verso',mins:25,desc:'Aplique percepção e memória ao repertório.',steps:['Abra a letra demonstrativa.','Leia sem cantar.','Divida em frases curtas.','Repita sem consultar quando estiver seguro.'],material:'/materiais/letra-demo.html',materialLabel:'Abrir letra da música',deliver:'Enviar atividade'},{icon:'📝',title:'Fechar meu treino',mins:5,desc:'Registre como foi o dia.',steps:['Qual nota foi mais fácil?','Qual foi mais difícil?'],deliver:'Responder'}];
 if(d===9)return [{icon:'🎼',title:'Primeiros solfejos',mins:18,desc:'Solfejar é cantar uma sequência usando o nome das notas. Hoje faremos três padrões simples.',steps:['1: Dó–Ré–Mi–Ré–Dó.','2: Dó–Mi–Sol–Mi–Dó.','3: Dó–Ré–Mi–Fá–Sol–Fá–Mi–Ré–Dó.','Ouça, memorize e repita.'],link:RES.earPractice,deliver:'Concluir 3 exercícios',pitchTrainer:true,targetNote:'C4'},{icon:'🎵',title:'Percepção aplicada à Música 1',mins:25,desc:'Ouça uma frase do repertório e tente reproduzir sem cantar junto com a gravação.',steps:['Ouça.','Pause.','Cante sozinho.','Compare e repita.'],deliver:'Enviar áudio'},{icon:'📝',title:'Fechar meu treino',mins:5,desc:'Conte como foi.',steps:['Qual sequência foi mais difícil?'],deliver:'Responder'}];
 const title=dayTitle(d); const media=d>=45&&d<=51||d>=82&&d<=85; const stage=d>=52&&d<=58||d>=86&&d<=89; const studio=d>=68&&d<=74; const content=d>=38&&d<=44||d>=75&&d<=81;
 let arr=[{icon:'🎤',title:'Preparar minha voz',mins:10,desc:'Comece com a rotina orientada pela equipe para este momento da sua preparação.',steps:['Assista/relembre a orientação.','Faça sem forçar a voz.'],deliver:'Concluir'}];
 if(media) arr.push({icon:d===47||d===83?'🎧':d===48||d===49||d===84?'📺':'🎙️',title:title,mins:30,desc:'Responda com naturalidade. Não tente decorar uma resposta perfeita.',steps:['Leia ou ouça uma pergunta por vez.','Pense por alguns segundos.','Responda de forma clara e verdadeira.'],deliver:'Gravar respostas'});
 else if(stage) arr.push({icon:'🎭',title:title,mins:d>=86?55:35,desc:'Treine como se houvesse público na sua frente.',steps:['Prepare a entrada.','Execute a atividade proposta.','Grave para sua equipe avaliar.'],deliver:'Enviar vídeo'});
 else if(studio) arr.push({icon:'🎧',title:title,mins:35,desc:'Hoje vamos aproximar você do processo de gravação profissional.',steps:['Ouça a referência/guia cadastrada.','Execute por partes.','Aceite correções e repita quando necessário.'],deliver:'Enviar teste'});
 else if(content) arr.push({icon:'📱',title:title,mins:30,desc:'Vamos praticar comunicação e conteúdo de forma simples e natural.',steps:['Veja a referência cadastrada.','Grave uma primeira tentativa.','Faça uma segunda versão mais natural.'],deliver:'Enviar conteúdo'});
 else arr.push({icon:'🎵',title:title,mins:30,desc:'Trabalhe a música ou habilidade indicada para hoje.',steps:['Ouça/observe a referência.','Divida em pequenas partes.','Pratique.','Grave uma tentativa.'],deliver:'Enviar atividade'});
 // A preparação vocal pode usar a aula de aquecimento, pois o objetivo é exatamente esse.
 if(arr[0] && arr[0].title==='Preparar minha voz') arr[0].link=RES.voice;
 // Recurso temático só entra na atividade principal do dia, nunca em todos os cards.
 const recursoDoDia=resourceFor(d);
 if(recursoDoDia && arr[1] && !arr[1].link) arr[1].link=recursoDoDia;
 if([10,15,22,31,38,61,62,63].includes(d)){arr[1].material='/materiais/letra-demo.html';arr[1].materialLabel='Abrir letra demonstrativa';}
 if([11,18,32,39,64].includes(d)){arr[1].material='/materiais/guia-estudo-musica.html';arr[1].materialLabel='Abrir guia rápido';}
 if([27,45,46,47,82].includes(d)){arr[1].material='/materiais/texto-entrevista-radio.html';arr[1].materialLabel='Abrir roteiro de entrevista';}
 arr.push({icon:'📝',title:'Fechar meu treino',mins:5,desc:'Registre rapidamente como foi o dia.',steps:['O que foi fácil?','O que foi difícil?','Precisa de ajuda?'],deliver:'Responder'}); return arr;
}
window.M90={WEEKS,dayTitle,why,activitiesFor};
