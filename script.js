const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class Player {
  constructor(symbol, name, accent) {
    this.symbol = symbol;
    this.name = name;
    this.accent = accent;
  }
}

class GameBoard {
  constructor() {
    this.reset();
  }

  reset() {
    this.cells = Array(9).fill('');
  }

  makeMove(index, symbol) {
    if (!this.isCellAvailable(index)) {
      return false;
    }
    this.cells[index] = symbol;
    return true;
  }

  isCellAvailable(index) {
    return Number.isInteger(index) && index >= 0 && index < this.cells.length && this.cells[index] === '';
  }

  getSnapshot() {
    return [...this.cells];
  }

  getAvailableMoves() {
    return this.cells.reduce((moves, value, index) => {
      if (value === '') {
        moves.push(index);
      }
      return moves;
    }, []);
  }
}

class ScoreManager {
  constructor() {
    this.scores = { x: 0, o: 0, draws: 0 };
  }

  increment(result) {
    if (result === 'x' || result === 'o' || result === 'draw') {
      this.scores[result === 'draw' ? 'draws' : result] += 1;
    }
  }

  reset() {
    this.scores = { x: 0, o: 0, draws: 0 };
  }

  getSnapshot() {
    return { ...this.scores };
  }
}

class SoundManager {
  constructor() {
    this.enabled = true;
    this.context = null;
    this.init();
  }

  init() {
    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      this.enabled = false;
    }
  }

  play(type) {
    if (!this.enabled || !this.context) {
      return;
    }

    const now = this.context.currentTime;
    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    const presets = {
      move: { frequency: 660, duration: 0.08, type: 'triangle', gain: 0.035 },
      win: { frequency: 880, duration: 0.16, type: 'sine', gain: 0.05 },
      draw: { frequency: 540, duration: 0.12, type: 'square', gain: 0.04 }
    };

    const preset = presets[type] || presets.move;
    oscillator.type = preset.type;
    oscillator.frequency.setValueAtTime(preset.frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(preset.frequency + 90, now + preset.duration);

    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(preset.gain, now + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + preset.duration);

    oscillator.start(now);
    oscillator.stop(now + preset.duration);
  }
}

class AnimationManager {
  constructor(container) {
    this.container = container;
    this.currentLine = null;
  }

  clearWinLine() {
    if (this.currentLine) {
      this.currentLine.remove();
      this.currentLine = null;
    }
  }

  showWinLine(cells, boardElements) {
    this.clearWinLine();

    const first = boardElements[cells[0]].getBoundingClientRect();
    const last = boardElements[cells[2]].getBoundingClientRect();
    const boardRect = this.container.getBoundingClientRect();

    const startX = first.left - boardRect.left + first.width / 2;
    const startY = first.top - boardRect.top + first.height / 2;
    const endX = last.left - boardRect.left + last.width / 2;
    const endY = last.top - boardRect.top + last.height / 2;

    const line = document.createElement('div');
    line.className = 'win-line';
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.width = `${Math.hypot(endX - startX, endY - startY)}px`;
    line.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`;
    this.container.appendChild(line);
    this.currentLine = line;
  }

  confetti() {
    const layer = document.getElementById('confettiLayer');
    for (let i = 0; i < 34; i += 1) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = `${Math.random() * 20}%`;
      piece.style.background = ['#6f7cff', '#8f5bff', '#2ee7c2', '#ff5e7a'][Math.floor(Math.random() * 4)];
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      piece.style.animationDelay = `${Math.random() * 0.15}s`;
      layer.appendChild(piece);
    }

    setTimeout(() => {
      layer.innerHTML = '';
    }, 1400);
  }
}

class UIManager {
  constructor(onCellClick, onNewGame, onRestart, onResetScores) {
    this.onCellClick = onCellClick;
    this.onNewGame = onNewGame;
    this.onRestart = onRestart;
    this.onResetScores = onResetScores;

    this.boardElement = document.getElementById('board');
    this.turnIndicator = document.getElementById('turnIndicator');
    this.turnSymbol = document.getElementById('turnSymbol');
    this.turnName = document.getElementById('turnName');
    this.statusMessage = document.getElementById('statusMessage');
    this.scoreX = document.getElementById('scoreX');
    this.scoreO = document.getElementById('scoreO');
    this.scoreDraw = document.getElementById('scoreDraw');
    this.newGameBtn = document.getElementById('newGameBtn');
    this.restartBtn = document.getElementById('restartBtn');
    this.resetScoresBtn = document.getElementById('resetScoresBtn');

    this.boardCells = [];
    this.bindEvents();
    this.renderBoard(Array(9).fill(''));
  }

  bindEvents() {
    this.newGameBtn.addEventListener('click', () => this.onNewGame());
    this.restartBtn.addEventListener('click', () => this.onRestart());
    this.resetScoresBtn.addEventListener('click', () => this.onResetScores());

    this.boardElement.addEventListener('click', (event) => {
      const cell = event.target.closest('.cell');
      if (!cell) {
        return;
      }
      const index = Number(cell.dataset.index);
      this.onCellClick(index);
    });

    this.boardElement.addEventListener('keydown', (event) => {
      const cell = event.target.closest('.cell');
      if (!cell) {
        return;
      }
      const index = Number(cell.dataset.index);
      const moves = {
        ArrowRight: index + 1,
        ArrowLeft: index - 1,
        ArrowDown: index + 3,
        ArrowUp: index - 3
      };

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.onCellClick(index);
      } else if (moves[event.key] !== undefined) {
        event.preventDefault();
        const nextIndex = this.normalizeIndex(index, moves[event.key]);
        if (nextIndex !== null && this.boardCells[nextIndex]) {
          this.boardCells[nextIndex].focus();
        }
      }
    });
  }

  normalizeIndex(currentIndex, nextIndex) {
    const row = Math.floor(currentIndex / 3);
    const col = currentIndex % 3;
    const nextRow = Math.floor(nextIndex / 3);
    const nextCol = nextIndex % 3;
    const isSameRow = nextRow === row;
    const isSameCol = nextCol === col;

    if (!Number.isInteger(nextIndex) || nextIndex < 0 || nextIndex > 8) {
      return null;
    }

    if ((isSameRow && Math.abs(nextCol - col) === 1) || (isSameCol && Math.abs(nextRow - row) === 1)) {
      return nextIndex;
    }

    if (Math.abs(nextRow - row) === 1 && Math.abs(nextCol - col) === 1) {
      return nextIndex;
    }

    return null;
  }

  renderBoard(cells) {
    this.boardElement.innerHTML = '';
    this.boardCells = [];

    cells.forEach((value, index) => {
      const button = document.createElement('button');
      button.className = 'cell';
      button.type = 'button';
      button.dataset.index = index;
      button.dataset.value = value;
      button.setAttribute('role', 'gridcell');
      button.setAttribute('aria-label', value ? `Cell ${index + 1} contains ${value}` : `Cell ${index + 1}, empty`);
      button.textContent = value;
      button.disabled = Boolean(value);
      button.classList.toggle('is-disabled', Boolean(value));
      this.boardElement.appendChild(button);
      this.boardCells[index] = button;
    });
  }

  updateBoard(cells) {
    this.boardCells.forEach((button, index) => {
      const value = cells[index];
      button.textContent = value;
      button.dataset.value = value;
      button.setAttribute('aria-label', value ? `Cell ${index + 1} contains ${value}` : `Cell ${index + 1}, empty`);
      button.disabled = Boolean(value);
      button.classList.toggle('is-disabled', Boolean(value));
    });
  }

  highlightWinningCells(cells) {
    this.boardCells.forEach((button, index) => {
      button.classList.toggle('is-winning', cells.includes(index));
    });
  }

  clearWinningCells() {
    this.boardCells.forEach((button) => button.classList.remove('is-winning'));
  }

  updateStatus(message, playerSymbol, playerName) {
    this.statusMessage.textContent = message;
    this.turnSymbol.textContent = playerSymbol || 'X';
    this.turnName.textContent = playerName || 'Player X';
    this.turnIndicator.dataset.player = playerSymbol || 'x';
  }

  updateScores(scores) {
    this.scoreX.textContent = scores.x;
    this.scoreO.textContent = scores.o;
    this.scoreDraw.textContent = scores.draws;
  }
}

class GameController {
  constructor() {
    this.board = new GameBoard();
    this.players = {
      x: new Player('X', 'Player X', '#6f7cff'),
      o: new Player('O', 'Player O', '#8f5bff')
    };
    this.scoreManager = new ScoreManager();
    this.soundManager = new SoundManager();
    this.animationManager = new AnimationManager(document.querySelector('.board-wrap'));
    this.ui = new UIManager(
      (index) => this.handleMove(index),
      () => this.startNewGame(),
      () => this.restartRound(),
      () => this.resetScores()
    );

    this.currentPlayer = 'x';
    this.gameOver = false;
    this.winningCells = [];
    this.init();
  }

  init() {
    this.ui.updateScores(this.scoreManager.getSnapshot());
    this.updateStatus();
  }

  startNewGame() {
    this.board.reset();
    this.currentPlayer = 'x';
    this.gameOver = false;
    this.winningCells = [];
    this.ui.clearWinningCells();
    this.animationManager.clearWinLine();
    this.ui.renderBoard(this.board.getSnapshot());
    this.updateStatus();
  }

  restartRound() {
    this.board.reset();
    this.currentPlayer = 'x';
    this.gameOver = false;
    this.winningCells = [];
    this.ui.clearWinningCells();
    this.animationManager.clearWinLine();
    this.ui.updateBoard(this.board.getSnapshot());
    this.updateStatus();
  }

  resetScores() {
    this.scoreManager.reset();
    this.ui.updateScores(this.scoreManager.getSnapshot());
  }

  handleMove(index) {
    if (this.gameOver || !this.board.isCellAvailable(index)) {
      return;
    }

    this.board.makeMove(index, this.currentPlayer);
    this.ui.updateBoard(this.board.getSnapshot());
    this.soundManager.play('move');

    const result = this.checkForWinner();
    if (result.type === 'win') {
      this.gameOver = true;
      this.winningCells = result.cells;
      this.scoreManager.increment(this.currentPlayer);
      this.ui.updateScores(this.scoreManager.getSnapshot());
      this.ui.highlightWinningCells(this.winningCells);
      this.animationManager.showWinLine(this.winningCells, this.ui.boardCells);
      this.animationManager.confetti();
      this.soundManager.play('win');
      this.updateStatus(`${this.players[this.currentPlayer].name} wins!`, this.currentPlayer, this.players[this.currentPlayer].name);
      return;
    }

    if (result.type === 'draw') {
      this.gameOver = true;
      this.scoreManager.increment('draw');
      this.ui.updateScores(this.scoreManager.getSnapshot());
      this.soundManager.play('draw');
      this.updateStatus("It's a draw!", 'D', 'Draw');
      return;
    }

    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
    this.updateStatus();
  }

  checkForWinner() {
    const cells = this.board.getSnapshot();

    for (const line of WINNING_LINES) {
      const [first, second, third] = line;
      const firstValue = cells[first];
      if (firstValue && firstValue === cells[second] && firstValue === cells[third]) {
        return { type: 'win', cells: line };
      }
    }

    if (cells.every(Boolean)) {
      return { type: 'draw' };
    }

    return { type: 'ongoing' };
  }

  updateStatus(message = null, symbol = null, name = null) {
    const player = this.players[this.currentPlayer];
    const fallbackMessage = this.gameOver
      ? message || `${player.name} wins!`
      : `${player.name} to move`;
    this.ui.updateStatus(message || fallbackMessage, symbol || this.currentPlayer, name || player.name);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GameController();
});
