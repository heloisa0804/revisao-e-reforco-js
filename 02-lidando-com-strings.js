'use script';

const nome = "Chapolin";
const sobrenome = "Colorado";
let idade = 20;
let cidade = "São PAulo";
let estado = "SP";

// CONCATENAÇÃO tradicional é Chapolin Colorado, tenho 20 anos e moro em São Paulo/Sp.

//CONCATENAÇÃO tradicional usa operador +
//let mensagem1 = "Meu nome é "+nome+" "+sobrenome+", tenho "+idade+" anos e moro em "+cidade+"/"+estado+".";

//Usando operador += para concatenar "por pedaços/partes"
let mensagem1 = "Meu nome é "+nome;
mensagem1 += ""+sobrenome+",tenho "+idade;
mensagem1 += "anos e moro em"+cidade;
mensagem1 += "/"+estado+".";


console.log(mensagem1);



// TEMPLENTE STRING/LITERAL