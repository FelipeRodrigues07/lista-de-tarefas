let contador = 0;

const input = document.getElementById('inputTarefa');
const btnAdd = document.getElementById('btn-add');
const main =  document.getElementById('areaLista');

function addTarefa() {
    //Pegar o valor digitado do input
    const valorInput = input.value;
    
    //se não for vazio, nem nulo, nem definido
    if((valorInput !=="")  &&  (valorInput!==null) && (valorInput!==undefined)) {
     
        ++contador;
        const novoItem  =  `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span  class="material-symbols-outlined">circle</span>
        </div>
        <div id="js" onclick="marcarTarefa(${contador})"    class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})"  class="delete"><span class="material-symbols-outlined">delete</span>Deletar</button>
        </div>`;


        //Adicionar novo Item no Main
        main.innerHTML  += novoItem;

        //zerar os capinhos
        input.value = "";
        input.focus();

      
    }
}



function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}



function marcarTarefa(id){
    var item  = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);
    const meio = document.getElementById("js");
    meio.style.textDecoration = "line-through";
    

}



input.addEventListener("keyup", function(event){
    //Se Teclou Enter(tecla 13)
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})
