// CRIANDO UM ARRAY DE OBJETO COM AS IMG E INFORMAÇOES DO BANNE
const bannerItems =[
    {
        imagem:"./src/assets/Game1.jpg",
        titulo:"Caçador de Bruxas",
        descricao:"Caça Bruxar com varinhas",
    },
    {
        imagem:"./src/assets/Game2.jpg",
        titulo:"Comedor de código",
        descricao:"lancha funções  como café da tarde",
    },
    {
        imagem:"./src/assets/Game3.jpg",
        titulo:"Coach City - Treino para vida",
        descricao:"Com grande códigos vem grandes projetos",
    }
];
// DECLARANDO AS VARIAVEIS E ELEMENTOS COM o dom(DOCUMENT OBJECT MODEL)

const tempo= 5000;
const elementoBanner = document.querySelector (".banner");
const elementoTitulo = document.querySelector (".banner-titulo");
const elementoDescricao = document.querySelector (".banner-descricao")

let i = 0;

//  Criando a função slideShow
function slideShow(){

    // ALTERA A IMAGEM DO FUNDO DO BANNER
    elementoBanner.style.backgroundImage =`url(${bannerItems[i].imagem})`;
    elementoTitulo.textContent =bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;

    i++;
    if( i >= bannerItems.length){
        i=0;
    }
    setTimeout(slideShow, tempo);
}

slideShow();

