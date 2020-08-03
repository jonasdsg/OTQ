export default class Foco{

    constructor(cpf,cep,descricao){
        this.cpf = cpf;
        this.pessoa.setEmail(email);
        this.cep = cep;
        this.descricao = descricao;
        this.status = true;
    }

    getPessoa(){
        return this.cpf;
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

    setDowStatus(){
        this.status = false;
    }

}
