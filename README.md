# Atividades de revisão e reforço de JavaScript

## Sobre escopo de variáveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada. Obs.:
  **obrigatório** inicializar com algum valor.

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanismo mais antigo, usa `module.exports` e `require` associado à uma constante.
- Módulos ESM: Mecanismo atual, usa `export` e `import`.

**Obs.:** recomendável criar na raíz o `package.json` contendo:

```json
{
  "type": "module"
}
```

---

## Sobre os operadores REST e SPREAD (...)

### Operador Rest (...)

- REST (...): Agrupa vários valores em um único array ou objeto. Exemplo: capturar argumentos de uma função.

### Operador Spread (...)

- SPREAD (...): Espalha os valores de um array ou objeto. Exemplo: copiar ou combinar arrays/objetos.

👉 Ambos usam ..., mas com propósitos opostos: REST junta, SPREAD espalha.

## Desestruturação

- A desestruturação em JavaScript é uma forma de extrair valores de arrays ou propriedades de objetos e atribuí-los diretamente a variáveis. Isso torna o código mais limpo e legível. No caso de arrays, a ordem dos elementos importa. Já com objetos, os nomes das propriedades devem corresponder. Também pode ser usada em parâmetros de funções para facilitar o acesso aos dados.

### Exemplo com array:

- js
- Copiar
- Editar
  const numeros = [1, 2, 3];
  const [a, b] = numeros;
  console.log(a); // 1
  console.log(b); // 2

### Exemplo com objeto:

js
Copiar
Editar
const pessoa = { nome: "Ana", idade: 25 };
const { nome, idade } = pessoa;
console.log(nome); // Ana
console.log(idade); // 25

### Vantagens:

Código mais limpo

- Evita repetições (como obj.prop)

- Útil em funções, especialmente com parâmetros
