const botaoMostraPalavra = document.querySelector('#botao-palavrachave')

botaoMostraPalavra.addEventListener('click',mostrarPalavrasChave);

function mostrarPalavrasChave(){
    const texto = document.querySelector('#entrada-de-texto').valeu;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");
    campoResultado.textContent = palavras.join("")
}