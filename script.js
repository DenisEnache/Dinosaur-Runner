let dinosaur = document.getElementById('dinosaur');
let startButton = document.getElementById('start-button');
let gameBackground = document.getElementById('game-background');
let score = document.getElementById('time');
let gameOverText = document.createElement('div');
let restartText = document.createElement('div');
let cactuses = ['cactus-style1', 'cactus-style2'];
let gameActive = false;
let time = 0;
let timerInterval;

function startGame() {
    gameActive = true;
    dinosaur.classList.add('dinosaur');
    startButton.style.display = 'none';
    createCactuses();
    createClouds();
    cronometer();
}

function restart() {
    gameActive = true;
    let existingObstacles = gameBackground.querySelectorAll('.cactus-style1, .cactus-style2');
    existingObstacles.forEach(obstacle => obstacle.remove());
    let existingClouds = gameBackground.querySelectorAll('.cloud-style');
    existingClouds.forEach(cloud => cloud.remove());
    time = 0;
    createCactuses();
    createClouds();
    cronometer();
    gameOverText.remove();
    restartText.remove();
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'Space' && gameActive) {
      dinosaur.classList.add('jump');
      setTimeout(function() {
        dinosaur.classList.remove('jump');
      }, 800);
    }
    if(!gameActive && event.code == 'Enter') {
        restart();
    }
});

function cronometer() {
    score.classList.add('score-style');
    timerInterval = setInterval(function() {
        ++time;
        score.textContent = time; 
    }, 1000); 
}

function createCactuses() {
    if (!gameActive) return;
    let randomCactus = Math.floor(Math.random() * 2);
    let cactus = document.createElement('div');
    cactus.classList.add(cactuses[randomCactus]);
    gameBackground.appendChild(cactus);
    cactus.style.right = '0px';
    cactus.style.bottom = '0px';
    let cactusMovingSpeed = 10;
    let currentPosition = 0;
    let interval = setInterval(function() {
        if (!gameActive) {
            clearInterval(interval); 
            return;
        }
        currentPosition += cactusMovingSpeed;
        cactus.style.right = currentPosition + 'px';
        if (currentPosition >= (gameBackground.offsetWidth - cactus.offsetWidth)) {
            clearInterval(interval);
            cactus.remove();
        }
    }, 25);
    let randomTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(createCactuses, randomTime);
}

function createClouds() {
    if (!gameActive) return;
    let randomPosition = Math.floor(Math.random() * 100);
    let cloud = document.createElement('div');
    cloud.classList.add('cloud-style');
    gameBackground.appendChild(cloud);
    cloud.style.right = '0px';
    cloud.style.bottom = (randomPosition + 150) + 'px';
    let cloudMovingSpeed = 3;
    let currentPosition = 0;
    let interval = setInterval(function() {
        if (!gameActive) {
            clearInterval(interval); 
            return;
        }
        currentPosition += cloudMovingSpeed;
        cloud.style.right = currentPosition + 'px';
        if (currentPosition >= (gameBackground.offsetWidth - cloud.offsetWidth)) {
            clearInterval(interval);
            cloud.remove();
        }
    }, 150);
    setTimeout(createClouds, 20000);
}

function collisionDinosaurObsatcles(object1, object2) {
    let element1 = object1.getBoundingClientRect();
    let element2 = object2.getBoundingClientRect();
    return (
        element1.x < element2.x + element2.width &&
        element1.x + element1.width > element2.x &&
        element1.y < element2.y + element2.height &&
        element1.y + element1.height > element2.y
    );
}

function checkCollisions() {
    let obstacles = document.querySelectorAll('.cactus-style1, .cactus-style2');
    obstacles.forEach(obstacle => {
        if (collisionDinosaurObsatcles(dinosaur, obstacle)) {
            gameActive = false;
            clearInterval(timerInterval);
            gameOver();
        }
    })
}

function gameLoop() {
    checkCollisions();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function gameOver() {
    gameOverText.classList.add('game-over');
    gameBackground.appendChild(gameOverText);
    restartText.textContent = 'Press Enter to restart';
    restartText.classList.add('restart-message');
    gameBackground.appendChild(restartText);
}


