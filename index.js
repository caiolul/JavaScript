    // 5
    console.log("1 questão");
    var endereco = {  
        rua: "Rua dos pinheiros",  
        numero: 1293,  
        bairro: "Centro",  
        cidade: "São Paulo",  
        uf: "SP"
};
    function ender(end){
        //console.log(endereco);
        console.log("O usuario mora em "+end.cidade,"/ "+end.uf,", no bairro "+end.bairro,", na rua "+end.rua,"com numero n° "+end.numero);
};
    ender(endereco);
    console.log("2 questão")
    function pares(x, y){
        for (let index = x; index < y; index++) {
                if(index % 2 == 0){
                    console.log(index,"eh par");
                    }
                else{
                    }
                }
    }
     pares(32,321);

    console.log("3 questão")
    var habi = ["JavaScript", "React Native", "ReactJS"];
    function skills(hab) {
        var search = hab.indexOf("JavaScript");
        if(search >= 0){
            return true;
                }
         else{
            return false;
                }
    }
    console.log(skills(habi));

    console.log("4 questão")
    function exp(anos){
        if(anos >= 0 && anos <= 1){
            return("Iniciante");
        }
        else if(anos >= 1 && anos <= 3){
            return("Intermediario");
        }
        else if(anos >= 3 && anos <= 6){
            return("Avançado");
        }
        else if (anos >= 7){
            return("Jedi Master");
        }  
    }
    var anos = 7;
    console.log(exp(anos));
            
    console.log("5 questão");

    var usuarios = [ 
        {    
            nome: "Diego",   
            habilidades: ["Javascript", "ReactJS", "Redux"] 
        },  
        {    
            nome: "Gabriel",    
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
        }
    ];//O Diego possui as habilidades: Javascript, ReactJS, ReduxO Gabriel possui as habilidades: VueJS, Ruby on Rails, ElixirDica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um arraycom um separador utilize o join.
    function print(usuario) {
        for (const iterator of usuario) {
            // var nome = usuario.join();
            console.log("O "+iterator.nome,"possui as habilidades : "+iterator.habilidades);
        }
    }
    print(usuarios);
