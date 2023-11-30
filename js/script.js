window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    // startGame()
    location.reload();
  });

  function handleKeydown(event) {
    const key = event.key;
    const directions = {
      ArrowLeft: -1,
      ArrowUp: -1,
      ArrowRight: 1,
      ArrowDown: 1,
    };

    if (directions.hasOwnProperty(key)) {
      event.preventDefault();

      game.player.directionX =
        key.includes("Left") || key.includes("Right") ? directions[key] : 0;
      game.player.directionY =
        key.includes("Up") || key.includes("Down") ? directions[key] : 0;
    }
  }
  window.addEventListener("keydown", handleKeydown);

  function handleKeyup(event) {
    const key = event.key;
    const directions = {
      ArrowLeft: -1,
      ArrowUp: -1,
      ArrowRight: 1,
      ArrowDown: 1,
    };

    if (directions.hasOwnProperty(key)) {
      event.preventDefault();

      if (
        (key.includes("Left") || key.includes("Right")) &&
        game.player.directionX === directions[key]
      ) {
        game.player.directionX = 0;
      }
      if (
        (key.includes("Up") || key.includes("Down")) &&
        game.player.directionY === directions[key]
      ) {
        game.player.directionY = 0;
      }
    }
  }
  window.addEventListener("keyup", handleKeyup);
});

/* MAT
window.addEventListener('load', () => {
  const startButton = document.getElementById('start-button')
  const restartButton = document.getElementById('restart-button')

  let game

  function startGame() {
    console.log('start game')
    game = new Game()
    game.start()
  }

  startButton.addEventListener('click', function () {
    startGame()
  })

  restartButton.addEventListener('click', function () {
    // startGame()
    location.reload()
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'ArrowUp' || event.code === 'KeyW') {
      console.log('Go up !')
      game.player.directionY = -1
    }
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
      console.log('Go down !')
      game.player.directionY = 1
    }
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
      console.log('Go left !')
      game.player.directionX = -1
    }
    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
      console.log('Go right !')
      game.player.directionX = 1
    }
  })

  document.addEventListener('keyup', event => {
    if (
      event.code === 'ArrowUp' ||
      event.code === 'KeyW' ||
      event.code === 'ArrowDown' ||
      event.code === 'KeyS'
    ) {
      console.log('Stop moving on Y')
      game.player.directionY = 0
    }
    if (
      event.code === 'ArrowLeft' ||
      event.code === 'KeyA' ||
      event.code === 'ArrowRight' ||
      event.code === 'KeyD'
    ) {
      console.log('Stop moving on X')
      game.player.directionX = 0
    }
  })
})
*/
