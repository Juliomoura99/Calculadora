function insert(num){

  var numero = document.getElementById('resultado').innerHTML;

  if(numero.length <= 10){

  if(
    (numero.substr(-1) == '/' || numero.substr(-1) == '+' || 
    numero.substr(-1) == '-'  || numero.substr(-1) == '*') &&
    (num == '/' || num == '+' || num == '-' || num == '*')
   ){

    }
  else{
    document.getElementById('resultado').innerHTML = numero + num;
}
}

}

function clean(){

  document.getElementById('resultado').innerHTML = "";
}

function calcular(){

  var resultado = document.getElementById('resultado').innerHTML;

  if(resultado){

    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  else{

    document.getElementById('resultado').innerHTML = "";

  }

}

let br = document.querySelector('#brasil');
let arg = document.querySelector('#argentina');
let hol = document.querySelector('#holanda');
let port = document.querySelector('#portugal');


br.addEventListener('click', () =>{

  document.body.style.backgroundImage = "linear-gradient(90deg,green,greenyellow,yellow,blue)";
  const collection = document.getElementsByClassName("numero");
  const collection1 = document.getElementsByClassName("op");
  const collection2 = document.getElementsByClassName("calculadora");

for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "green";
}

for (let i = 0; i < collection1.length; i++) {
  collection1[i].style.backgroundColor = "yellow";
}

for (let i = 0; i < collection2.length; i++) {
  collection2[i].style.backgroundColor = "blue";
}

});

arg.addEventListener('click', () =>{

  document.body.style.backgroundImage = "linear-gradient(90deg,blue,white,white,blue)";
  const collection = document.getElementsByClassName("numero");
  const collection1 = document.getElementsByClassName("op");
  const collection2 = document.getElementsByClassName("calculadora");

for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "darkblue";
}

for (let i = 0; i < collection1.length; i++) {
  collection1[i].style.backgroundColor = "white";
}

for (let i = 0; i < collection2.length; i++) {
  collection2[i].style.backgroundColor = "blue";
}

});

hol.addEventListener('click', () =>{

  document.body.style.backgroundImage = "linear-gradient(90deg,red,white,blue)";
  const collection = document.getElementsByClassName("numero");
  const collection1 = document.getElementsByClassName("op");
  const collection2 = document.getElementsByClassName("calculadora");



for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "orange";
}

for (let i = 0; i < collection1.length; i++) {
  collection1[i].style.backgroundColor = "white";
}

for (let i = 0; i < collection2.length; i++) {
  collection2[i].style.backgroundColor = "darkorange";
}



});

port.addEventListener('click', () =>{

  document.body.style.backgroundImage = "linear-gradient(90deg,red,green)";
  const collection = document.getElementsByClassName("numero");
  const collection1 = document.getElementsByClassName("op");
  const collection2 = document.getElementsByClassName("calculadora");



for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "darkgreen";
}

for (let i = 0; i < collection1.length; i++) {
  collection1[i].style.backgroundColor = "red";
}

for (let i = 0; i < collection2.length; i++) {
  collection2[i].style.backgroundColor = "green";
}



});