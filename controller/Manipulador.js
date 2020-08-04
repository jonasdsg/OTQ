const KEY_FOCO = 'F';
const KEY_PESS = 'P';

function salvarPessoa(pessoa){
    debugger
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

function salvarFoco(foco){
    debugger
    var arrFocos = obterJson(KEY_FOCO);
    if(arrFocos.legth>0){
        arrFocos.push(foco);
        var save = JSON.stringify(arrFocos);
        localStorage.setItem(KEY_FOCO,save);
    }
    else{
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

function preencherUL(titulo,quantidade,detalhe){
    var focos = obterJson(KEY_FOCO);
    var pessoas = obterJson(KEY_PESS);
    var ul = document.querySelector("ul");
    ul.appendChild((new NovaLista(titulo,quantidade,detalhe)).retornarLista());

}