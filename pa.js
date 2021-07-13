var valorInicial = 3;
var razao = 2;
var quantidade = 5;
var elemento;
var  somapa = 0;

elemento= valorInicial
for (var contador = 0; contador < quantidade; contador++)
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