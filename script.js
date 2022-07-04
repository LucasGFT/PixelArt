// const novaDiv = document.createElement('div');
// novaDiv.className = 'color';
// novaDiv.style.backgroundColor = 'red';
// const paiQuadradoDeCor = document.getElementById('quadradosDeCor');
// paiQuadradoDeCor.appendChild(novaDiv);
const paiQuadradoDeCor = document.querySelector('#pixel-board');
function quadradosParaColorir() {
  for (let index = 0; index < 25; index += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.className = 'pixel';
    novaDiv.style.backgroundColor = 'white';

    paiQuadradoDeCor.appendChild(novaDiv);
  }
}
const primeiroQuadrado = document.querySelector('.black');
const segundoQuadrado = document.querySelector('.blue');
const terceiroQuadrado = document.querySelector('.green');
const quartoQuadrado = document.querySelector('.red');
window.onload = function () {
  primeiroQuadrado.classList.add('selected');
};

quadradosParaColorir();

let exatoLugarQueSelectedEsta = primeiroQuadrado;
let exatoLugarQueSelectedEsta1;
function corClicada(event) {
  exatoLugarQueSelectedEsta.classList.remove('selected');
  const quadradoClicado = event.target;
  exatoLugarQueSelectedEsta = quadradoClicado;
  quadradoClicado.classList.add('selected');
  exatoLugarQueSelectedEsta1 = quadradoClicado;
}
// for (let index = 0; index <= paiQuadradoDeCor.childElementCount; index += 1) {
//   let teste = paiQuadradoDeCor.children[index];
//   teste.addEventListener('click', corClicada);
// }
// mudando classe selecte apos clicar em alguns dos quadrados de cor
primeiroQuadrado.addEventListener('click', corClicada);
segundoQuadrado.addEventListener('click', corClicada);
terceiroQuadrado.addEventListener('click', corClicada);
quartoQuadrado.addEventListener('click', corClicada);

// let teste2 = document.querySelector('.selected');
// let corSelected = quadradoComSelected.style.backgroundColor;
// console.log(exatoLugarQueSelectedEsta1);
// let corQuadradinho = exatoLugarQueSelectedEsta.classList[1];
// console.log(corQuadradinho);
function quadradoParaMudar(event) {
  const teste = exatoLugarQueSelectedEsta;
  const quadradinhoClicado = event.target;
  const cor = teste.classList[1];
  quadradinhoClicado.style.backgroundColor = cor;
  //   console.log(cor);
}

// eslint-disable-next-line no-restricted-syntax
for (const index of paiQuadradoDeCor.children) {
  index.addEventListener('click', quadradoParaMudar);
}

function limparCores() {
  // eslint-disable-next-line no-restricted-syntax
  for (const index of paiQuadradoDeCor.children) {
    index.style.backgroundColor = 'white';
  }
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', limparCores);

// const boardSize = document.querySelector('#board-size');
// let quantosQuadradosTem = 25;

// // eslint-disable-next-line max-lines-per-function
// function numeroDeQuadrado() {
//   let valueImput = boardSize.value;
//   let numeroDeQuadrado = valueImput * valueImput;
//   if (quantosQuadradosTem > numeroDeQuadrado) {
//     console.log('chegou aq');
//     for (
//       let index = 0;
//       index < quantosQuadradosTem - numeroDeQuadrado;
//       index += 1
//     ) {
//       paiQuadradoDeCor.removeChild(paiQuadradoDeCor.children[0]);
//     }
//   }
//   let maisQuantoQuadrados = numeroDeQuadrado - quantosQuadradosTem;
//   let numeroLargura = valueImput * 42;
//   if (valueImput > 5) {
//     for (let index = 0; index < maisQuantoQuadrados; index += 1) {
//       const novaDiv = document.createElement('div');
//       novaDiv.className = 'pixel';
//       novaDiv.style.backgroundColor = 'white';
//       paiQuadradoDeCor.appendChild(novaDiv);
//     }
//     paiQuadradoDeCor.style.width = numeroLargura + 'px';
//   }
//   quantosQuadradosTem = numeroDeQuadrado;
// }
// const button1 = document.querySelector('#generate-board');
// button1.addEventListener('click', numeroDeQuadrado);

// //  const novaDiv = document.createElement('div');
// //     novaDiv.className = 'pixel';
// //     novaDiv.style.backgroundColor = 'white';

// //     paiQuadradoDeCor.appendChild(novaDiv);
