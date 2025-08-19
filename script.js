// --- CONTROLE DO MODAL DE LOGIN ---

// Pega os elementos do HTML que vamos usar
const loginButton = document.getElementById('login-btn');
const closeModalButton = document.getElementById('close-modal');
const loginModal = document.getElementById('login-modal');

// Função para ABRIR o modal
function openModal() {
    // Adiciona a classe 'show', que o CSS usa para exibir o modal
    loginModal.classList.add('show');
}

// Função para FECHAR o modal
function closeModal() {
    // Remove a classe 'show' para esconder o modal
    loginModal.classList.remove('show');
}

// Adiciona um "ouvinte de evento" para o clique no botão de login
// Quando o botão for clicado, ele chama a função openModal
loginButton.addEventListener('click', openModal);

// Adiciona um "ouvinte" para o clique no botão de fechar (o 'X')
closeModalButton.addEventListener('click', closeModal);

// Opcional: Fechar o modal se o usuário clicar fora da caixa branca
loginModal.addEventListener('click', function(event) {
    // Verifica se o clique foi no fundo cinza (o overlay) e não no conteúdo
    if (event.target === loginModal) {
        closeModal();
    }
});

// Futuramente, a lógica de upload e login real será adicionada aqui.
// Por enquanto, este arquivo cuida apenas da interatividade visual.
