// 
//  Esse controller tem por objetivo automatizar a criação dos nodes filhos da ul.
//

    
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

var ul = document.querySelector("ul");


var li = document.createElement("li");
li.classList.toggle("list-group-item");
li.classList.toggle("list-group-action");
// cria a header para adicionar o strong e span.
var header = document.createElement("header");
header.classList.toggle("d-flex");
header.classList.toggle("flex-row")

//cria o elemento strong com o nome do local
var strong = document.createElement("strong");
strong.classList.toggle("align-items-start");
strong.appendChild(document.createTextNode("Jonas, funcionou!"));

//Cria o elemento span com a quantidade de alertas criados.
var span = document.createElement("span");
span.classList.toggle("ml-2");
span.classList.toggle("badge");
span.classList.toggle("badge-warning");
span.classList.toggle("align-items-end");
span.appendChild(document.createTextNode("100"));

//cria a main para adicionar a tag small com a descrição.
var main = document.createElement("main");
main.classList.toggle("flex-row");
var small = document.createElement("small");
small.appendChild(document.createTextNode("Não pegou mais vai pegar fogo bixo!"));

main.appendChild(small);
header.appendChild(strong);
header.appendChild(span);
li.appendChild(header);
li.appendChild(main);
ul.appendChild(li);