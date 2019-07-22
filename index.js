/*
function verif(nome, cpf){
    if(nome === "Caio")
        return nome;
    else{
        if(cpf === 1)
            return "Nome incorreto, mas cpf valido";
        else{
            return "Nome e cpf incorreto";
        }
    }
}
var nome = "Caio";
var cpf = 1;
var resul = verif(nome, cpf);

console.log(resul);
*/
var endereco = {  
    rua: "Rua dos pinheiros",  
    numero: 1293,  
    bairro: "Centro",  
    cidade: "São Paulo",  
    uf: "SP"
}; 
function returnDados(end) {
    return 'O usuario mora em '+end.cidade,' /'+end.uf, 'no bairro'+end.bairro,'na rua '+end.rua,' de numero'+end.numero;
}