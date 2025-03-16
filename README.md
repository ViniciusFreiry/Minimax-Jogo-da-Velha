# Minimax Jogo da Velha

Este é um projeto de Jogo da Velha implementado em **JavaScript**, **HTML** e **CSS**, com uma inteligência artificial (IA) utilizando o algoritmo **Minimax** para determinar as melhores jogadas.

## Sobre o Projeto

O jogo da velha (ou "tic-tac-toe") é um clássico jogo de tabuleiro entre dois jogadores. Neste projeto, a IA joga como o jogador **O**, e o usuário joga como o jogador **X**. A IA utiliza o algoritmo **Minimax** para otimizar suas jogadas e tentar vencer o jogador humano, tomando decisões inteligentes com base no estado atual do tabuleiro.

## Funcionalidades

- **Modo de Jogo**: O jogo é jogado entre um usuário (jogador X) e a IA (jogador O).
- **Inteligência Artificial**: A IA utiliza o algoritmo **Minimax** para analisar todas as possibilidades de jogadas e escolher a melhor jogada possível.
- **Estratégias**:
  - A IA prioriza o centro do tabuleiro, uma posição forte no jogo.
  - A IA evita perder, bloqueando as jogadas vencedoras do oponente.
- **Responsividade**: O jogo é responsivo e pode ser jogado em diversos dispositivos, como desktops e dispositivos móveis.
- **Reinício de Jogo**: Após o fim de um jogo, há a opção de reiniciar o jogo e começar uma nova partida.

## Como Jogar

1. Abra o arquivo `index.html` em seu navegador.
2. O jogo começará com o jogador **X** fazendo o primeiro movimento.
3. A IA (jogador **O**) irá fazer seu movimento automaticamente após a jogada do jogador.
4. O jogo continuará até que haja um vencedor ou empate.
5. Após o fim de um jogo, clique no botão **Reiniciar** para jogar novamente.

## Tecnologias Utilizadas

- **HTML**: Para estruturação do tabuleiro e interface do usuário.
- **CSS**: Para estilização do jogo, incluindo o design do tabuleiro e dos botões.
- **JavaScript**: Para lógica do jogo e implementação do algoritmo Minimax.
  
## Como Rodar o Projeto

Este é um projeto simples que pode ser executado diretamente em qualquer navegador moderno.

1. Clone o repositório:
   ```bash
   git clone https://github.com/ViniciusFreiry/Minimax-Jogo-da-Velha.git