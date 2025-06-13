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
