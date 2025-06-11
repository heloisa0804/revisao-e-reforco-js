"use strict";

import { separador } from "./modulos-esm/exemplos.js";

// Desestruturando arrays

const clientes = ["Jon Oliva", "Geddy Lee", "David Gilmour"];
const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

separador();

const capitais = [
  "João Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

// Desestruturando alguns valores (omitimos Curitiba e Belo Horizonte)
const [paraiba, amazonas, , bahia] = capitais;

console.log(paraiba);
console.log(amazonas);
console.log(bahia);

separador();

const linguagens = [
  ["HTML", "CSS", "JS"],
  ["PHP", "Node.js", "SQL", "Phynton", "ASP.net"],
];

//console.log(linguagem[0][2]); // JS
//console.log(linguagem[1][3]); // Python

const [frontEnd, backEnd] = linguagens;

console.log(frontEnd[2]); // Js
console.log(backEnd[3]); // Python

separador();

// Desestruturaçãp aninhada
const [[html, css, js], [php, node, sql, python, asp]] = linguagens;
console.log(js);
console.log(python);

separador();

/* Mini-exercício */

const diversos = [
  "JavaScript - Reforço",
  ["Teclado", "Monitor", "Mouse"],
  2112,
  (texto) => texto.toUpperCase(),
];

// Faça a desestruturação dos elementos deste array
// Teste usando console.log para exibir cada elemento extraído

const [titulo, [teclado, monitor, mouse], numero, converter] = diversos;

console.log(titulo);
console.log(teclado);
console.log(monitor);
console.log(mouse);
console.log(numero);
console.log(converter("Heloisa"));

separador();

const guleseimas = [
  "brigadeiro",
  "brownie",
  "torta de limão",
  "coxinha",
  "pastel",
  "pizza",
  "esfiha",
];

// Desestruturação com operador rest
const [brigadeiro, brownie, torta, ...salgados] = guleseimas;

console.log(brigadeiro);
console.log(salgados); // virou um array

separador();

// Desestruturando objetos
const musico = {
  nome: "David Gilmour",
  instrumento: "Guitarra",
  idade: 77,
  banda: "Pink Floyd",
};

// Acessando propriedades atráves do objeto ( sem desestruturação)
//console.log(musico.nome);
//console.log(musico.idade);

//com desestruturação
const { nome, instrumento, idade, banda } = musico;
console.log(nome);
console.log(instrumento);
console.log(idade);
console.log(banda);

separador();

const aluno = {
  nome: "Ozzy",
  cidade: "São Paulo",
  estado: "SP",
};

// Desestruturação com alias/apelido em propriedade
const { nome: nomeDoAluno, cidade, estado } = aluno;
console.log(nomeDoAluno);
console.log(cidade);
console.log(estado);
