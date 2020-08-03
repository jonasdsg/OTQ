function salvarPessoa(p){
    arrPessoas = [];
    
    if((arrPessoas = obterJson('p'))!=null){
        arrPessoas.push(p);
        var save = JSON.stringify(arrPessoas);
        localStorage.setItem('p',save);
    }
    else
        localStorage.setItem('p',JSON.stringify(p));
}


function salvarFoco(f){
    if((arrFocos = obterJson('f'))!=null){
        arrFocos.push(f);
        var save = JSON.stringify(arrFocos);
        localStorage.setItem('f',save);
    }
    else
        localStorage.setItem('f',f);
}

function obterJson(key){
    if(localStorage.getItem(key)!=null){
        var local = localStorage.getItem('p');
        return JSON.parse(local);
    }
    return null;
}