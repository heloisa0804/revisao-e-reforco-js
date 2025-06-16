"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

// reduce (reduzir, redução, chegar a um resultado único)
// Passa por elementos de um array e reduz a um único valor, que pode ser uma soma, média, concatenação, etc.

// A função callback recebe dois parâmetros: o acumulador ( valor que é acumulado até o momento), e o valor atual ( elemento do array sendo processado).

// Exemplo 1
const valores = [10, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total);

separador();

// Exercício 1: realize a soma dos preços de todos os cursos
//Mostre no log
const somaPrecos = cursos.reduce((total, { preco }) => total + preco, 0);
console.log(somaPrecos);

// Exercício 2: calcule a média dos preços de todos os cursos
//Mostre no log
const { soma, quantidade } = cursos.reduce(
  ({ soma, quantidade }, { preco }) => ({
    soma: soma + preco,
    quantidade: quantidade + 1,
  }),
  { soma: 0, quantidade: 0 }
);
const mediaPrecos = soma / quantidade;
console.log(mediaPrecos);

// Exercício 3: calcule o preço dos cursos de Fron-End
//Mostre no log

const somaFrontEnd = cursos
  .filter(({ categoria }) => categoria === "Front-End")
  .reduce((total, { preco }) => total + preco, 0);
console.log(somaFrontEnd);
