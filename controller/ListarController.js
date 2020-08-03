// 
//  Esse controller tem por objetivo automatizar a criação dos nodes filhos da ul.
//

init();

function init(){
    VIEW_DOM = new ListarController();
    VIEW_DOM.adicionarEstadosComUFNoSelect();
}

class ListarController{

    constructor(){
        this.ARRAY_UF = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
        this.ARRAY_ESTADOS = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]
    }

    adicionarEstadosComUFNoSelect(){
        var select = document.querySelector("select");
        var option = document.createElement("option");
        option.setAttribute("value","JN");
        option.appendChild(document.createTextNode("Jonas"));
        select.appendChild(option);    
    }

    
}


/*


class Foco{
    constructor(cpf,cep,descricao){
        this.cpf = cpf;
        this.cep = cep;
        this.uf  = "";
        this.descricao = descricao;
        this.status = true;
    } 
    setDownStatus(){
        if(this.quantidade===0)
            this.status = false;
        else
            this.quantidade--;
    }
   
    setUFE(uf){
        this.uf = uf;
    }
}

init();

function init(){
   p = new Foco("1111.222.222.22","20040007","pegou fogo");
   p.setUFE("rj");
   adicionarLista(p);
}


if(localStorage.getItem("pessoas")!=null){
    var arrayPessoa = JSON.parse(localStorage.getItem("pessoas"));
    var arrayFoco = JSON.parse(localStorage.getItem("focos"));
    for(i = 0; i<arrayFoco.length; i++){
        adicionarLista(arrayFoco[i]);
    }
}
else 
{
    window.location = "../views/main.html";
    alert("Não há nenhum foco cadastrado!");
}




function adicionarLista(foco){

    var main_list = document.querySelector("ul");
    main_list.appendChild(criarLi(foco));
}






function criarLi(objFoco){
    var li = document.createElement('li');
    li.classList.toggle("list-group-item");
    li.classList.toggle("list-group-item-action");
    li.appendChild(criarDivPrincipal(objFoco))
    return li;
}

function criarDivPrincipal(objFoco){
    var div = document.createElement('div'); //d-flex flex-column
    div.classList.toggle("d-flex");
    div.classList.toggle("flex-column");
    div.appendChild(criarMain(objFoco));
    return div;
}



function criarMain(objFoco){
    var main = document.createElement('main');
    main.criarSubDivDoMain(objFoco);
    return main;
}

function criarSubDivDoMain(objFoco){
    var subDiv = document.createElement('div'); // justify-content-between
    subDiv.classList.toggle("d-flex");
    subDiv.classList.toggle("justify-content-between");
    subDiv.appendChild(criarSubDivComONomeDoLocal(objFoco.cep,objFoco.descricao));
    subDiv.appendChild(criarItemcomBadge(contagem(objFoco.uf)));
    return subDiv;

}

function criarSubDivComONomeDoLocal(local,info){
    var div = document.createElement('div');
    div.classList.toggle("d-flex");
    div.classList.toggle("flex-column");

    var strong = document.createElement('strong');
    strong.appendChild(document.createTextNode(local));
    var small = document.createElement('small');
    small.appendChild(document.createTextNode(info));

    subItem1.appendChild(strong);
    subItem1.appendChild(small);

    return subItem1;

}

function criarItemcomBadge(q){
    var div = document.createElement('div');
    div.classList.toggle("d-flex");
    div.classList.toggle("flex-column");
    b = document.createElement('span');
    b.classList.toggle("badge");
    b.classList.toggle("badge-warning")
    b.appendChild(document.createTextNode(q));
    div.appendChild(b);
    return div;

}

function contagem(UF){
    var total = 0;
    if(localStorage.getItem("pessoas")!=null){
        var tmp = localStorage.getItem("pessoas");
        var pessoa = JSON.parse(tmp);
        for(i = 0; i<pessoa.length; i++){       
            if(UF===pessoa[i].cep.toLowerCase()){
            total++;
            }
        }
    }
    return total;
}*/