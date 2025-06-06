'use strict';

exemplo1();//chamada da função

//Sintaxe tradicional, função nomeada
// A ordem de declaração da função neste caso NÃO IMPORTA
function exemplo1(){
    console.log("Função nomeada");

}

exemplo1(); //chamada da função

//////////////////////

console.log("****************");

// Sintaxe tradicional, função anônima
// Nesta sintaxe, a ordem IMPORTA.
const exemplo2 = function(){
     console.log("Função anônima");
};

exemplo2(); // chamada (sempre após declarar a função anônima)
