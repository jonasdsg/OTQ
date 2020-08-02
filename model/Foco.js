import {Pessoa} from "./Pessoa.js";

class Foco{

    constructor(nome,cpf,data,email,cep,descricao){
        this.pessoa = new Pessoa(nome,cpf,data);
        this.pessoa.setEmail(email);
        this.cep = cep;
        this.descricao = descricao;
    }

    getPessoa(){
        return this.pessoa.getCpf();
    }

    getCep(){
        return this.cep;
    }

    getDescricao(){
        return this.descricao;
    }

    setCep(cep){
        this.cep = cep;
    }

    setDescricao(desc){
        this.descricao = desc;
    }

    
}