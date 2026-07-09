
let listas = []

// função ao clicar
function adicionar_tarefa() {

    // Pega o elemento do documento com o id  // Da outra variavel, dando um valor da passada
    const input_tarefa = document.getElementById ("input_tarefa");
    let tarefa = input_tarefa.value.trim() // trim = tira os espaços em branco no inicio e final
    
    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {

        let mensagem_erro = "Digite algo para adicionar!"
        mensagem.textContent = mensagem_erro
    
    } else {

        // variavel mensagem sucesso
        let mensagem_sucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagem_sucesso

        // push = insere na lista
        listas.push(tarefa) 
        renderizar_tarefas()
    }  

    // limpa o campo
    input_tarefa.value = ""
}

function renderizar_tarefas () {
     
    // Cria novo item (li) e insere na (lista ul)
    const lista_tarefas = document.getElementById ("lista_tarefas")
    lista_tarefas.innerHTML = ""  // limpa a lista (não aparece repetido)

    // for (iterador, condição, frenquencia)
    
    for (let i = 0; i < listas.length; i++) {

        let nova_tarefa = document.createElement ("li")
        // Faz aparecer uma mensagem // Coloca dentro do ul
        nova_tarefa.textContent = listas [i]

        let botao_remover = document.createElement("button")
        botao_remover.className = "remover"
        botao_remover.textContent = "X"
        /* function pode ser = function () { 
              remover_tarefa 
        }
        OUUU */ 
        botao_remover.onclick = () => remover_tarefa(i)

        let botao_editar = document.createElement("button")
        botao_editar.className = "editar"
        botao_editar.textContent = "Editar"
        botao_editar.onclick = () => editar_tarefa (i)

        // AppendChild = Ele permite inserir elementos HTML na página sem precisar recarregá-la.
        nova_tarefa.appendChild (botao_remover)
        nova_tarefa.appendChild (botao_editar)
        lista_tarefas.appendChild (nova_tarefa)

    }   
}

function remover_tarefa (i) {
    listas.splice(i, 1) // splice = retira da lista
    renderizar_tarefas()
}

function editar_tarefa (i) {
    let tarefa_editada = prompt("Edite a tarefa: ")
    if (tarefa_editada.trim() !== "") {
        listas[i] = tarefa_editada
        renderizar_tarefas()
   }
}

function limpar_lista () {
    listas.length = 0
    renderizar_tarefas()
    const mensagem = document.getElementById ("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}