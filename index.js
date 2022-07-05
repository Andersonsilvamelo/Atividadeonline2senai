var dataEvento;
var participantes = 0;
var idade = 0;
var dataAtual = new Date("");

participantes = 108;
idade = 18;

for(let x = 0; x < participantes.length; x++) {
    console.log("participantes 108");

    dataEvento = new Date("06/03/2022");
    idade = 18;
    if (x == 1) {
        
        dataEvento = new Date("17/12/2022");
    }
    if  (x == 2) {
        
        idade = 15;
    } 
    if (participantes.length < 100) {
        if (dataEvento >= dataAtual) {
            if (idade >= 18) {
                console.log("Cadastro Permitido");
                console.log("Idade" + idade);
                console.log("Data Atual" + dataAtual.toDateString());
                console.log("Data Evento" + dataEvento.toDateString());
            } else {
                console.log("Idade inválida menor que 18 anos");
            } 
        } else {
            console.log("Data do Evento inválido");
            console.log("Data Atual" + dataAtual.toDateString());
            console.log("Data Evento" + dataEvento.toDateString());
        }
    }    
    else {
        console.log("Cadasto não permitido numero de participantes é maior que 100");
    }
    console.log("Cadastro realizado com sucesso!");
    
}

