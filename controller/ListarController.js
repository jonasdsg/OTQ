// 
//  Esse controller tem por objetivo automatizar a criação dos nodes filhos da ul.
//


class NovaLista{
    constructor(titulo,quantidade,detalhe){
        this.titulo = titulo;
        this.quantidade = quantidade;
        this.detalhe = detalhe;
    }
    retornarLista(){
        var li = document.createElement("li");
        li.classList.toggle("list-group-item");
        li.classList.toggle("list-group-action");
        li.appendChild(this.retornarHeader());
        li.appendChild(this.retornarMain());
        return li;
    }
    retornarHeader(){
        // cria a header para adicionar o strong e span.
        var header = document.createElement("header");
        header.classList.toggle("d-flex");
        header.classList.toggle("flex-row");
        header.appendChild(this.retornarStrong());
        header.appendChild(this.retornarSpanBadge(this.quantidade))
        return header;
    }

    retornarStrong(){
        //cria o elemento strong com o nome do local
        var strong = document.createElement("strong");
        strong.classList.toggle("align-items-start");
        strong.appendChild(document.createTextNode(this.titulo));
        return strong;
    }

    retornarSpanBadge(){
        //Cria o elemento span com a quantidade de alertas criados.
        var span = document.createElement("span");
        span.classList.toggle("ml-2");
        span.classList.toggle("badge");
        span.classList.toggle("badge-warning");
        span.classList.toggle("align-items-end");
        span.appendChild(document.createTextNode(this.quantidade));
        return span;
    }
    retornarMain(){
        //cria a main para adicionar a tag small com a descrição.
        var main = document.createElement("main");
        main.classList.toggle("flex-row");
        var small = document.createElement("small");
        small.appendChild(document.createTextNode(this.detalhe));
        main.appendChild(small)
        return main;
    }
   
}


    ARRAY_UF = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
    ARRAY_ESTADOS = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]
    var select = document.querySelector("select");
// -- Adicionar preencher o select //
    for(i = 0; i<ARRAY_ESTADOS.length;i++){
        var option = document.createElement("option");
        option.setAttribute("value",ARRAY_UF[i]);
        option.appendChild(document.createTextNode(ARRAY_ESTADOS[i]));
        select.appendChild(option);    
    }

// -- Preencher a ul.
    preencherUL("Floresta da tijuca",5,"Inicio hoje");
    preencherUL("Floresta da tijuca",5,"Inicio hoje");
    preencherUL("Floresta da tijuca",5,"Inicio hoje");


    /*

    if(focos.length>0){
        var quantidade = 0;
        for(i = 0; i<pessoas.length; i++){

        }
    }
    else{
        alert("Não há focos cadastrados!");
    }
*/