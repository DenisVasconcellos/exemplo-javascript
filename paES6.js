const valorInicial = 3;
const razao = 2;
const quantidade = 5;
let elemento;
let  somapa = 0;

elemento= valorInicial
for (let contador = 0; contador < quantidade; contador++)
{
    console.log(elemento);
    somapa += elemento
    elemento += razao;
}
console.log(somapa);


/*
do
{
    console.log();
    contador++;
}  while (contador < quantidade);
*/