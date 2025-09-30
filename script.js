const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        "enunciado": "Certa manhã um senhor sai a caça com sua espingarda, ele resolve ir pelo meio da floresta, já em certo ponto ele se depara com dois caminhos, ele tem que escolher um caminho. ",
        "alternativas": [
            {
                "texto": "O caminho de Pedras",
                "afirmacao": " ele se adentra pelo caminho feito de pedras, onde ele se depara com um rio"
            },
            {
                "texto": "O caminho de terra",
                "afirmacao": " ele se adentra pelo caminho de terra, onde ele se depara com uma cachoeira"
            }
        ]
    },
    {
        "enunciado": "Ele acha a paisagem muito impressionante, cansado de tanto andar ele procura um lugar para descansar",
        "alternativas": [
            {
                "texto": "Se deitar abaixo de uma árvore",
                "afirmacao": "  cansado ele se deita em baixo de uma árvore, se deparando com um animal "
            },
            {
                "texto": "Se deitar perto da água",
                "afirmacao": " cansado ele se deita a beira das águas, se deparando com um animal"
            }
        ]
    },
    {
        "enunciado": "Com a visão ruim ele tenta identificar que animal era",
        "alternativas": [
            {
                "texto": "É uma onça",
                "afirmacao": " tendo visto que era uma onça ele corre atrás de uma rocha e puxa sua espingarda, engatilha e atira"
            },
            {
                "texto": "É um Biguá",
                "afirmacao": " tendo visto que era um biguá ele se afasta, engatilha sua espingarda e atira "
            }
        ]
    },
    {
        "enunciado": "Com um tiro de sorte ele acerta o animal silvestre, tendo garantido seu jantar porém ele tem que decidir se ele esquarteja o animal no local ou em sua residência",
        "alternativas": [
            {
                "texto": " Pegar o animal e carnear ele no local",
                "afirmacao": " Ele carneia ele e após isso o leva para casa para preparar o seu jantar"
            },
            {
                "texto": "Pegar o animal e carnear ele em sua casa",
                "afirmacao": " Ele pega o animal e leva em sua casa, após isso ele carneia ele para o seu jantar"
            }
        ]
    },
    {
        "enunciado": "Com a carne do animal ele precisa ver como ele irá preparar a carne para o consumo",
        "alternativas": [
            {
                "texto": "Faz um molho com a carne",
                "afirmacao": " Com a carne do animal ele faz um molho e come em seu jantar."
            },
            {
                "texto": "Faz um assado com a carne",
                "afirmacao": " Com a carne ele assa ela e a come em seu jantar."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Dia de caça";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();