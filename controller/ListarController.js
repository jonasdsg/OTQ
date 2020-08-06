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

    var select = document.querySelector("select");
    preencherSelect(sessionStorage.getItem("clicked_state"));

    preencherUL(clicked_state);

// -- Preencher a ul.
    select.addEventListener("click",function(evento){
        var tag = evento.target;
        if(tag.tagName==="OPTION"){
            console.log(tag.value);
            preencherUL(tag.value);
        }
        
    })

    