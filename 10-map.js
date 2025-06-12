"use scritc";
import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";

/* map (mapear, mapeamento - transformar/gerar em outra coisa)
Passa por elementos de um array e realiza operações em cada um deles através de uma função callback, gerando um novo array de elementos transformados. */

// Exemplo 1

const numeros = [10, 20, 5, 12.5, 66, 50, 1000];
console.log(numeros);

const numerosDobrados = numeros.map((numero) => numero * 2);

console.log(numerosDobrados);

separador();

// Mini exercício:
/* 1) Crie um array com 5 textos escritos em letras MAIÚSCULAS
2) Mostre no console este array
3) Usando o map, acesse e transforme todos eles em letras minúsculas (toLowercase)
4) Guarde o resultado do map em uma nova constante
5) Mostre no console este novo Array
 */

const textos = [
  " O MACACO QUER BANANA",
  " O CACHORRO GOSTA DE OSSO",
  " O GATO QUER PESTICO",
  " O RATO GOSTA DE QUEIJO",
  "A BALEIA GOSTA DE NADAR ",
];

console.log(textos);

const textoMinusculo = textos.map((frase) => frase.toLowerCase());

console.log(textoMinusculo);

separador();

console.log("== Lista Completa de Cursos ==");
console.log(cursos);
console.log("======================");

separador();

//Exemplo 2: gerar um novo array contendo somente os títulos dos cursos
const titulos = cursos.map((curso) => curso.titulo);
console.log(titulos);

/* Exercícios
Use o map para gerar um novo array contendo SOMENTE os preços dos cursos calculados com  um desconto de 10%.
*/

const precosComDesconto = cursos.map(
  (curso) => curso.preco - curso.preco * 0.1
);
console.log(precosComDesconto);

separador();

// Exemplo 3 : gerar um novo array COMPLETO ( ou seja, com os objetos completos) mas com os preços atualizados com o desconto
const cursosComDesconto = cursos.map((curso) => {
  return {
    ...curso, //spread das propriedades do curso (copiando-as pra cá)
    preco: curso.preco - curso.preco * 0.1, // mas o preço é atualizado
  };
});

console.log(cursosComDesconto);

separador();

/* Exercício
Gere uma nova lista de cursos contendo apenas os titulos e as categorias
*/

const novaLista = cursos.map((item) => ({
  titulo: item.titulo,
  categoria: item.categoria,
}));

console.log(novaLista);
