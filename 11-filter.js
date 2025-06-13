"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* filetr ( filttar)
Passa por elemntos de um array e executa uma função callback visando retornar valores de um acordoi com uma ou maus condições, gerando um novo array.*/

// Exemplo 1: filtrar vendas que tenham batido uma meta
const vendas = [1500, 3000, 500, 1000, 750, 5000, 100];
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => venda >= META);
console.log(vendasQueBateramMeta);

/** Se fosse fazer sem filter...
 * const baterMeta = [];
 * for ( const venda of vendas){
 * if (vendas >= META){
 * baterMeta.push(venda)
 * }
 * }
 */

separador();

// Exemplo 2 : filtar serviços pendentes
const servicos = [
  { codigo: 1, tipo: "Limpeza", status: " Concluído" },
  { codigo: 2, tipo: "Manutenção", status: "Pendente" },
  { codigo: 3, tipo: "Reparo", status: "Pendente" },
  { codigo: 4, tipo: "Consultoria", status: " Concluído" },
  { codigo: 5, tipo: "Instalação", status: " Concluído" },
];

// Exercício

const servicosPendentes = servicos.filter(
  ({ status }) => status === "Pendente"
);

console.log(servicosPendentes);

separador();

// Exemplo 3
const cursosDesign = cursos.filter((curso) => {
  return curso.categoria === "Design";
});
console.log(cursosDesign);

separador();

// Exemplo 4
const cursosExetoDesign = cursos.filter((curso) => {
  return curso.categoria !== "Design";
});
console.log(cursosExetoDesign);

separador();

// Exercicio
// Gere um novo array com os cursos que atendam os seguintes criterios:
// Categoriga Front-End OU Mobile
// Preços acima de 600.

const cursosMobileFront = cursos.filter(
  (curso) =>
    (curso.categoria === "Front-End" || curso.categoria === "Mobile") &&
    curso.preco > 600
);
console.log("exercicio");
console.log(cursosMobileFront);

separador();

// Desafio 😫😫😫
// Gerar um novo array com os curos da categoria Back-End e COM O PREÇO atualizado com 10% de desconto. Para esta atividade voce deverá combinar filter com map.

//const cursosBack = cursos
//.filter((curso) => {
// return curso.categoria === "Back-End";
// })
//.map((curso) => {
// return { ...curso, preco: curso.categoria - curso.categoria * 0.1 };
//});

// Desestruturado
const cursosBack = cursos
  .filter((curso) => curso.categoria === "Back-End")
  .map((curso) => ({ ...curso, preco: curso.preco - curso.preco * 0.1 }));

console.log(cursosBack);
