var json = null;
//import Pessoa from "../model/Pessoa.js";

class Pessoa{

    constructor(nome,cpf,nascimento,email){
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.email = email;
    }
}

class Foco{

    constructor(cpf,cep,uf,descricao){
        this.bairro = "";
        this.cpf = cpf;
        this.cep = cep;
        this.descricao = descricao;
        this.status = true;
        this.uf = uf;
    }
    addBairro(bairro){
        this.bairro = bairro;
    }
}


buscarCep = document.querySelector("#cep");
buscarCep.addEventListener("input",function(e){
    cep = e.target.value;
    if(cep.length>=8){
        console.log(cep)
        var connect = new XMLHttpRequest();

        if(!isNaN(cep))
        {
            option = document.querySelectorAll('option');
            var URL_CEP = "https://viacep.com.br/ws/"+cep+"/json/";
            connect.open('GET',URL_CEP);
            connect.send();
            setTimeout(() => {  
                
                json = JSON.parse(connect.responseText);  
                for(i = 0; i<option.length; i++)
                    if(option[i].value.toLowerCase()===json.uf.toLowerCase()){
                        option[i].setAttribute("selected","");
                    }
                
            }, 2000);

        }
        
        else
            alert("CEP inválido! Só são permitidos números.");

    }
    
});


alertar = document.querySelector("#alertar");
alertar.addEventListener("click",function(e){
    
    //Informações de quem criou o alerta
    nome = document.querySelector("#nome").value;
    cpf = document.querySelector("#cpf").value;
    nascimento = document.querySelector("#nasc").valueAsDate;
    email = document.querySelector("#email").value;
    
    var pessoa = new Pessoa(nome,cpf,nascimento,email);
    
    //Informações sobre o foco;
    cep = document.querySelector("#cep").value;
    detalhe = document.querySelector("#detalhes").value;
    
    var foco = new Foco(cpf,cep,json.uf,detalhe);
    foco.addBairro(json.logradouro);
    salvarPessoa(pessoa);
    salvarFoco(foco);

});
