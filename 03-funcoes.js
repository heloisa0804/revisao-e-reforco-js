'use strict';

exemplo1();//chamada da função

function separador(){
    console.log("\n****************\n");
}

separador();

//Sintaxe tradicional, função nomeada
// A ordem de declaração da função neste caso NÃO IMPORTA
function exemplo1(){
    console.log("Função nomeada");

}

exemplo1(); //chamada da função

//////////////////////

separador();

// Chamada aqui dá erro, pois não pode ser feita antes da declaração
// exemplo2();

// Sintaxe tradicional, função anônima
// Nesta sintaxe, a ordem IMPORTA.
const exemplo2 = function(){
     console.log("Função anônima");
};

exemplo2(); // chamada (sempre após declarar a função anônima)


separador();

/* 1) Crie uma função (qualquer sintaxe) que receba dois valores numericos como parâmetros, calcule a diferença entre valores e retorne o resultado calculado */

/* 2) Chame esta função pelo menos duas vezes passando valores diferentes e guardando os resultados em variáveis de escopo global. */

/* 3) Apresente os resultados no console. */


function calculoDiferenca(a,b) {
    let resultado = a - b;
   return resultado ; 
}

let resultado1 = calculoDiferenca(20,10);
let resultado2 = calculoDiferenca (30,10);

console.log("Resultado 1:", resultado1); 
console.log("Resultado 2:", resultado2); 