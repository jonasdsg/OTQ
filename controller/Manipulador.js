function salvarPessoa(p){
    debugger
    var arrPessoas = [];
    
    if((arrPessoas = obterJson('p'))!=null){
        arrPessoas.push(p);
        var save = JSON.stringify(arrPessoas);
        console.log(save);
        localStorage.setItem('p',save);
    }
    else{
        arrPessoas[0] = p;
        var save = JSON.stringify(arrPessoas);
        localStorage.setItem('p',save);
    }
}


function salvarFoco(f){
    debugger
    var arrFocos = [];
    if((arrFocos = obterJson('f'))!=null){
        arrFocos.push(f);
        var save = JSON.stringify(arrFocos);
        console.log(save)
        localStorage.setItem('f',save);
    }
    else{
        arrFocos.push(f);
        var save = JSON.stringify(arrFocos);
        localStorage.setItem('f',save);
    }
}

function obterJson(key){
    if(localStorage.getItem(key)!=null){
        var local = localStorage.getItem('p');
        var parse = JSON.parse(local);
        return parse;
    }
    return null;
}