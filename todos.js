var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos') || []);

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');

        var linkText = document.createTextNode('  Excluir ');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

//adicionar tópicos
function addTodo(){
    var todoText = inputElement.value;

    //adicionar novo item no final do array
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
buttonElement.onclick = addTodo;

//deletar tópicos
function deleteTodo(pos){
    todos.splice(pos, 1); //vai até a posição e remove 1 item
    renderTodos();
    saveToStorage();
}

//salvar todos
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
