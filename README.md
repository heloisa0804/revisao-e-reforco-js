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
