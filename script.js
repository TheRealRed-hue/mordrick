// Mordrick System Monitor
console.log(">> SYSTEM ONLINE :: MORDRICK / CODE-13");

// espaço futuro para:
// - animações de barra
// - alteração dinâmica de status
// - leitura de JSON de personagem

const status = document.querySelector(".status");

// pequeno efeito de sistema vivo
setInterval(() => {
  status.style.opacity = status.style.opacity === "0.6" ? "1" : "0.6";
}, 2000);

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

const output = document.getElementById("terminalOutput");
const introRecord = document.querySelector(".record.unlocked");

const bootText = [
  "Loading Data…",
  "Loading Files…",
  "User: Code 13",
  "Loaded Successful [",
  "Age: …19",
  "Height: 2.3m",
  "Weight: 242kg",
  "Race: L-[Corrupted File] .. Loading again",
  "Error Error Error Error Error",
  "Error Error Error Error Error",
  "Error Error Error Error Error",
  "Error Error Error Error Error",
  "",
];

let line = 0;

function typeBoot() {
  if (line < bootText.length) {
    output.textContent += bootText[line] + "\n";
    line++;
    setTimeout(typeBoot, 180);
  } else {
    setTimeout(loadLore, 800);
  }
}

function loadLore() {
  output.textContent += "\n--- FILE RECOVERED ---\n\n";
  output.textContent += `
Mordrick.
Esse é o nome que ele usa agora. Não porque lhe foi dado, mas porque foi escolhido. Antes disso, nomes não existiam. Apenas números.

Código 13.

Era assim que constava nos registros da divisão. Um número atribuído não por ordem de criação, mas por finalidade. A Décima Terceira Divisão não treinava soldados — moldava ferramentas. Empatia era considerada falha de projeto. Humanidade, um erro de cálculo. Crianças não eram crianças ali; eram ativos biológicos em fase de calibração.

A rotina começava às 04:00.
Sempre às 04:00.
Sem despertadores. Sem explicações.

Corpos alinhados. Olhos ainda pesados de sono. Exames invasivos, repetitivos, clínicos demais para mentes tão jovens. Alimentação ocorria em silêncio, interrompida apenas pelo som metálico de seringas sendo preparadas. Substâncias eram injetadas enquanto mastigavam — compostos cujo nome nunca foi informado, apenas tolerado. Aprenderam cedo que perguntar custava caro.

O ciclo se repetia.
Dia após dia.
Até os dias de simulação.

Ataques em larga escala. Ambientes artificiais projetados para falhar. Gritos reais em cenários falsos. O objetivo não era vencer — era observar quem quebrava primeiro. Mordrick não sabia nomear o que sentia, mas a angústia se tornava permanente, como um ruído de fundo que nunca cessava.

Se o treinamento já era desumano, o tratamento era pior.

Ele era um Liang.
Filho de um erro considerado imperdoável.

Seus pais — um Liang e uma humana — foram executados antes que ele tivesse idade suficiente para lembrar de seus rostos. O motivo era simples, direto, brutal: miscigenação. O racismo não era velado, era institucionalizado. A criança foi retirada não para ser protegida, mas porque seu corpo representava uma oportunidade científica. Um híbrido. Um experimento em potencial. Uma arma futura.

Ainda assim, mesmo naquele lugar, algo resistiu.

Havia um grupo. Poucos, mas constantes.
Riam dele. Faziam piadas sobre sua aparência, sua força exagerada, sua resistência absurda. Mas nunca atravessavam a linha. Era zombaria compartilhada, não crueldade. Em um ambiente onde tudo era projetado para destruir vínculos, aquilo foi o mais próximo de afeto que Mordrick conheceu.

O tempo passou.
Cresceram.
Foram separados.

Cada um designado a uma organização distinta, conforme sua “utilidade”. No caso de Mordrick, a decisão foi imediata. Sua aparência causava desconforto. Seu corpo lembrava demais aquilo que o sistema queria apagar. A solução foi simples: uma máscara.

Não para protegê-lo.
Para proteger os outros de vê-lo.

Diziam que ele servia apenas para uma coisa: ir para a linha de frente e vencer. Grandes confrontos. Zonas de aniquilação. Missões onde estatísticas de sobrevivência eram irrelevantes. Mordrick cumpria. Não por lealdade. Não por ódio. Apenas porque era isso que esperavam dele. Vitória ou derrota nunca tiveram significado real.

Até o dia em que tudo caiu.

A divisão foi atacada.
Não por humanos.
Não por algo que constava nos arquivos.

Criaturas estranhas romperam as defesas. Protocolos falharam. Comando perdido. Mordrick lutou com o que restava, tentando assegurar uma vitória que ele já sabia ser impossível. Foi então que viu um deles — um dos antigos amigos — avançando de forma desesperada, quase suicida, contra um dos monstros.

O impacto foi imediato.
Violento.
Irreversível.

Sangue demais. Tempo de menos.

Era certo: todos morreriam ali.

Mordrick não pensou.
Apenas agiu.

Vestiu o traje. Segurou o corpo do amigo, ainda quente, ainda respirando por reflexo. Com a força e agilidade de um Liang — algo que haviam explorado por anos — ele saltou. Para longe. Para fora do inferno. Não foi um ato heroico. Foi instinto cru, talvez o último resquício de algo que tentaram apagar.

Depois disso, o mundo mudou.

A organização caiu.
Depois, voltou.
Como sempre.

Ofereceram retorno. Missões. Estrutura. Ordens. Seu amigo aceitou. Mordrick, não. Ele ficou. Nas ruas da cidade. Sem hierarquia. Sem número. Ainda usando o traje — não por obrigação, mas porque ele já fazia parte do que restou.

Hoje, vive de caçadas. Recebe nomes, descrições, alvos. Não pergunta o motivo. Faz isso desde que tudo desmoronou. Atua como guarda, sombra silenciosa entre becos e prédios decadentes. Não chama isso de liberdade — seria mentir para si mesmo.

Mas é um começo.

E, pela primeira vez, a escolha foi dele.

`;
}


introRecord.addEventListener("click", () => {
  output.textContent = "";
  line = 0;
  typeBoot();
});


const records = document.querySelectorAll(".record");
const recordImage = document.getElementById("recordImage");

records.forEach(record => {
  record.addEventListener("click", () => {
    const type = record.dataset.record;

    if (type === "base") {
      requestPassword();
    }
  });
});


function requestPassword() {
  const password = prompt("ENTER ACCESS KEY:");

  if (!password) return;

  if (password === "PROMETEUS") {
    unlockBaseRecord();
  } else {
    terminalOutput.textContent = "ACCESS DENIED\n";
    glitchTerminal(600);
  }
}


function glitchTerminal(duration = 400) {
  const terminal = document.querySelector(".terminal");
  terminal.classList.add("glitch-hard");

  setTimeout(() => {
    terminal.classList.remove("glitch-hard");
  }, duration);
}


function unlockBaseRecord() {
  terminalOutput.textContent = "";
  recordImage.style.display = "none";

  glitchTerminal(1200);

  const baseText = [

  "ACESSO CONCEDIDO",
  "CHAVE ACEITA :: PROMETEUS",
  "",
  ">> CARREGANDO REGISTRO BASE",
  ">> AVISO: ARQUIVO PARCIALMENTE CORROMPIDO",
  "",
  "DESIGNAÇÃO: CÓDIGO-13",
  "NOME ATUAL: MORDRICK",
  "ESPÉCIE: HÍBRIDO LIANG / HUMANO",
  "CLASSIFICAÇÃO: ATIVO BIO-ARMAMENTISTA",
  "STATUS: NÃO VINCULADO",
  "",
  "ORIGEM:",
  "INDIVÍDUO NASCIDO DE UNIÃO PROIBIDA.",
  "GENITORES ELIMINADOS ANTES DA FORMAÇÃO DE MEMÓRIA.",
  "SUJEITO RETIDO PARA ESTUDO E APLICAÇÃO EM CAMPO.",
  "",
  "OBSERVAÇÕES:",
  "DESEMPENHO FÍSICO EXCEDE LIMITES HUMANOS.",
  "PERFIL PSICOLÓGICO: INCONCLUSIVO.",
  "RESPOSTA EMPÁTICA: ABERRANTE, PORÉM PRESENTE.",
  "",
  "[FIM DOS DADOS ESTÁVEIS]"


  ];

  let i = 0;
  function typeBase() {
    if (i < baseText.length) {
      terminalOutput.textContent += baseText[i] + "\n";
      i++;
      setTimeout(typeBase, 120);
    } else {
      recordImage.style.display = "block";
    }
  }

  typeBase();
}
