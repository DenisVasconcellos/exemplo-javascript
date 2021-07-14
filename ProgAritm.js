const pa = ({
    valorInicial,
    razao,
    quantidade}) => {
        let elemento;
        let  somapa = 0;
        
        elemento= valorInicial
        for (let contador = 0; contador < quantidade; contador++)
        {
            console.log(elemento);
            somapa += elemento;
            elemento += razao;
        }
        console.log('Soma = ${somapa}');
}

pa({
    valorInicial: 13,
    razao: 5,
    quantidade: 5
});
/*
do
{
    console.log();
    contador++;
}  while (contador < quantidade);
*/    

