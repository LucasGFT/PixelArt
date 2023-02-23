const paiQuadradoDeCor = document.querySelector('#pixel-board');
const primeiroQuadrado = document.querySelector('.black');
const segundoQuadrado = document.querySelector('.blue');
const terceiroQuadrado = document.querySelector('.green');
const quartoQuadrado = document.querySelector('.red');
const quintoQuadrado = document.querySelector('.pink');
const sextoQuadrado = document.querySelector('.yellow');
const setimo = document.querySelector('.white');
window.onload = () => {
  primeiroQuadrado.classList.add('selected');
};

let exatoLugarQueSelectedEsta = primeiroQuadrado;
function corClicada(event) {
  exatoLugarQueSelectedEsta.classList.remove('selected');
  const quadradoClicado = event.target;
  exatoLugarQueSelectedEsta = quadradoClicado;
  quadradoClicado.classList.add('selected');
}
// mudando classe selecte apos clicar em alguns dos quadrados de cor
primeiroQuadrado.addEventListener('click', corClicada);
segundoQuadrado.addEventListener('click', corClicada);
terceiroQuadrado.addEventListener('click', corClicada);
quartoQuadrado.addEventListener('click', corClicada);
quintoQuadrado.addEventListener('click', corClicada);
sextoQuadrado.addEventListener('click', corClicada);
setimo.addEventListener('click', corClicada);

function quadradoParaMudar(event) {
  const teste = exatoLugarQueSelectedEsta;
  const quadradinhoClicado = event.target;
  const cor = teste.classList[1];
  quadradinhoClicado.style.backgroundColor = cor;
}
function as() {
  for (let index = 0; index < paiQuadradoDeCor.children.length; index += 1) {
    paiQuadradoDeCor.children[index].addEventListener(
      'click',
      quadradoParaMudar,
    );
  }
}
function quadradosParaColorir(numero) {
  let teste;
  if (numero === undefined) {
    teste = 25;
  } else {
    teste = numero;
    const lista = document.querySelectorAll('.pixel');
    for (let index = 0; index < lista.length; index += 1) {
      lista[index].remove();
    }
  }
  for (let index = 0; index < teste; index += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.className = 'pixel';
    novaDiv.style.backgroundColor = 'white';
    paiQuadradoDeCor.appendChild(novaDiv);
    as();
  }
}
quadradosParaColorir();

function limparCores() {
  for (let index = 0; index < paiQuadradoDeCor.children.length; index += 1) {
    paiQuadradoDeCor.children[index].style.backgroundColor = 'white';
  }
}

function aumentarPixelBoard(valorInput) {
  let novoValor;
  console.log(valorInput);
  if (valorInput < 10 && valorInput > 5) {
    novoValor = valorInput * 40 + 50;
  } else if (valorInput === 5) {
    novoValor = 210;
  } else {
    novoValor = valorInput * 40 + 60;
  }
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.style.width = `${novoValor}px`;
}

function aumentarQuadrado() {
  let valorInput = document.getElementById('board-size').value;
  if (valorInput === '') return window.alert('Board inválido!');

  const pixels = paiQuadradoDeCor.children;
  if (valorInput <= 5) valorInput = 5;
  if (valorInput >= 30) valorInput = 30;
  quadradosParaColorir(valorInput * valorInput);
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
  aumentarPixelBoard(valorInput);
}

function sortear(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function test() {
  const tests = ['blue', 'green', 'red', 'pink', 'yellow'];
  const arr = sortear(tests);
  console.log(arr);
  const ola = document.querySelector('#color-palette');
  for (let index = 1; index < 6; index += 1) {
    const classe = ola.children[index].classList[1];
    ola.children[index].classList.remove(classe);
    ola.children[index].classList.add(arr[index - 1]);
  }
}
test();

const button = document.querySelector('#clear-board');
const testtt = document.querySelector('#board-size');
testtt.addEventListener('change', aumentarQuadrado);
button.addEventListener('click', limparCores);