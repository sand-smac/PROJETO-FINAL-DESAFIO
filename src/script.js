const API_KEY = "VALOR_API";
const DB_PASSWORD = "SENHA_BANCO_DE_DADOS";

fetch('db.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('db-status').innerText = data.status;

        const list = document.getElementById('task-list');
        data.itens.forEach(item => {
            let li = document.createElement('li');
            // CORREÇÃO 3: innerText em vez de innerHTML (evita XSS)
            li.innerText = item.task;
            list.appendChild(li);
        });
    })
    .catch(() => {
        // CORREÇÃO 2: Mensagem genérica sem expor detalhes internos
        document.getElementById('db-status').innerText =
            '❌ Erro ao conectar. Tente novamente.';
    });

function addTask() {
    const input = document.getElementById('new-task');
    const list = document.getElementById('task-list');

    if (!input.value.trim()) return;

    // CORREÇÃO 3: Usando createElement + innerText (sem innerHTML, sem XSS)
    const li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li);

    // CORREÇÃO 4: eval() removido completamente
    console.log('Tarefa adicionada.');

    input.value = '';
}
