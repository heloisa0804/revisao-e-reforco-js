"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* filetr ( filttar)
Passa por elemntos de um array e executa uma função callback visando retornar valores de um acordoi com uma ou maus condições, gerando um novo array.*/

// Exemplo 1: filtrar vendas que tenham batido uma meta
const vendas = [1500, 3000, 500, 1000, 750, 5000, 100];
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => {
  return venda >= META;
});
console.log(vendasQueBateramMeta);

/** Se fosse fazer sem filter...
 * const baterMeta = [];
 * for ( const venda of vendas){
 * if (vendas >= META){
 * baterMeta.push(venda)
 * }
 * }
 */
