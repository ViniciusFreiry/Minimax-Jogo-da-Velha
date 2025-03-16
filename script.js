// Definindo os jogadores e o estado do tabuleiro
const PLAYER_X = 'X';
const PLAYER_O = 'O';
const EMPTY = null;

let board = Array(9).fill(EMPTY); // Tabuleiro vazio
let currentPlayer = PLAYER_X; // Jogador X começa
let gameOver = false;

// Função para desenhar o tabuleiro na tela
function drawBoard() {
    const boardElement = document.getElementById('game-board');
    boardElement.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = board[i];
        cell.addEventListener('click', () => makeMove(i), { once: true });
        boardElement.appendChild(cell);
    }
}

// Função para mostrar o status do jogo
function updateStatus(message) {
    document.getElementById('status').textContent = message;
}

// Função para verificar se alguém venceu
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Retorna 'X' ou 'O'
        }
    }

    return board.includes(EMPTY) ? null : 'tie'; // Se houver empate
}

// Função para realizar um movimento
function makeMove(index) {
    if (gameOver || board[index] !== EMPTY) return;

    board[index] = currentPlayer;
    drawBoard();

    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === 'tie') {
            updateStatus('Empate!');
        } else {
            updateStatus(`${winner} venceu!`);
        }
    } else {
        currentPlayer = (currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;
        if (currentPlayer === PLAYER_O && !gameOver) {
            aiMove(); // Jogada da IA
        }
    }
}

// Função para a IA fazer sua jogada
function aiMove() {
    const bestMove = minimax(board, 9, false);
    board[bestMove] = PLAYER_O;
    drawBoard();

    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === 'tie') {
            updateStatus('Empate!');
        } else {
            updateStatus(`${winner} venceu!`);
        }
    } else {
        currentPlayer = PLAYER_X;
    }
}

// Função Minimax
function minimax(board, depth, isMaximizingPlayer) {
    const winner = checkWinner(board);
    if (winner !== null) {
        // Se alguém venceu, ou o jogo terminou em empate
        if (winner === PLAYER_O) return 1;
        if (winner === PLAYER_X) return -1;
        return 0;
    }

    let bestMove = -1;

    if (isMaximizingPlayer) {
        let bestVal = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === EMPTY) {
                board[i] = PLAYER_O;
                const moveVal = minimax(board, depth + 1, false);
                board[i] = EMPTY;
                if (moveVal > bestVal) {
                    bestMove = i;
                    bestVal = moveVal;
                }
            }
        }
        return bestMove;
    } else {
        let bestVal = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === EMPTY) {
                board[i] = PLAYER_X;
                const moveVal = minimax(board, depth + 1, true);
                board[i] = EMPTY;
                if (moveVal < bestVal) {
                    bestMove = i;
                    bestVal = moveVal;
                }
            }
        }
        return bestMove;
    }
}

// Função para reiniciar o jogo
document.getElementById('reset').addEventListener('click', () => {
    board = Array(9).fill(EMPTY);
    currentPlayer = PLAYER_X;
    gameOver = false;
    drawBoard();
    updateStatus('');
});

// Desenha o tabuleiro inicialmente
drawBoard();