const KEY_FOCO = 'F';
const KEY_PESS = 'P';

function salvarPessoa(pessoa){
    var arrPessoas = obterJson(KEY_PESS);
    
    if(arrPessoas.legth>0){
        arrPessoas.push(pessoa);
        var save = JSON.stringify(arrPessoas);
        localStorage.setItem(KEY_PESS,save);
    }
    else{
        arrPessoas.push(pessoa);
        var save = JSON.stringify(arrPessoas);
        localStorage.setItem(KEY_PESS,save);
    }
}

function salvarFoco(foco,cpf){
    debugger
    var arrFocos = obterJson(KEY_FOCO);
    var jaExiste = false;
    
    if(arrFocos.length>0){
        for(i = 0; i<arrFocos.length; i++){
            if(arrFocos[i].cep===foco.cep){
                jaExiste = true;
                arrFocos[i].addPessoa(cpf);
            }
        }
    }
    
    if(!jaExiste){
        foco.cpfs.push(cpf)
        arrFocos.push(foco)
        var save = JSON.stringify(arrFocos);
        localStorage.setItem(KEY_FOCO,save);
    }
}

function obterJson(key){
    var local = localStorage.getItem(key);
    if(local!=null){
        var parse = JSON.parse(local);
        return parse;
    }
    return [];
}

function criarElementosDaLista(titulo,quantidade,detalhe){
    var focos = obterJson(KEY_FOCO);
    var pessoas = obterJson(KEY_PESS);
    var ul = document.querySelector("ul");
    ul.appendChild((new NovaLista(titulo,quantidade,detalhe)).retornarLista());

}

function preencherUL(uf){
    var arrFocos = [];
    var arrPessoas = [];
    arrFocos = obterJson(KEY_FOCO);
    arrPessoas = obterJson(KEY_PESS);
    
    for(i = 0; i<arrFocos.length; i++){
        var quantidade = 0;
        if(arrFocos[i].uf.toLowerCase()===uf.toLowerCase()){
            todosOsCpfsDesseFoco = arrFocos[i].cpfs;
            for(x = 0; x<todosOsCpfsDesseFoco.length;x++){
                for(j = 0; j<arrPessoas.length; j++){
                    if(arrPessoas[j].cpf.toLowerCase()===todosOsCpfsDesseFoco[x].toLowerCase())
                        quantidade++;
                }
            }
            criarElementosDaLista(arrFocos[i].bairro,quantidade,arrFocos[i].descricao);
        }
        
    }
}