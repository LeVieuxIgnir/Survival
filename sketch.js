let PosX;
let PosY;

let d = 20;

let ObstacleX = [];
let ObstacleY = [];

let direction = [];
let vitesse = 5;

let DistanceX = 10;
let DistanceY = 10;
let Distance = 10;

let vitesseT = 3;

let x;
let y;
let timer;

let h_v = 0;

let aLive = true;

let changingX = [];
let changingY= [];

let obstacleSpeed = 0;

let t_restart = 0;

let nbreObstacles = 3; 

function setup() {
    timer = millis();
    createCanvas(640, 480);
    restart()
}



function draw() {
    if (aLive == true) {
        game();
    } else {
        showScore()
        waitRestart()
    }
}



function showScore(){
    if (aLive === true) {
        // Temps écoulé depuis le début du programme
        timer = Math.floor(millis() / 1000);
        // Temps écoule depuis t_restart
        timer = timer - t_restart;
        textSize(60);
        text(timer, 300, 300);
        textSize(30);
    } else {       
        textSize(48)
        fill('orange')
        textFont('Roboto Condensed');
        text('You Loose', 170, 240)
        fill('red')
        text('!', 390, 240)
        textSize(36)
        fill('orange')
        text('Your Score :', 170, 340)
        fill('red')
        text(t_restart, 360, 340)
    }
}

function keyPressed() {
    if ((keyCode === 13) && (aLive == true)) {
        t_restart = Math.floor(millis() / 1000);
        aLive = false;
    } else {
        aLive = true;
    }
}

function restart() {
    PosX = 100;
    PosY = 100;
    for (let i=0; i<nbreObstacles; i++){
        ObstacleX[i] = random(0, 300);
        ObstacleY[i] = random(0, 300);
        direction[i] = random(-1 , 1);
    }
}

function waitRestart() {
    if (keyIsDown(ENTER)) {
        restart();
        aLive = true;
    }
}


function showObstacle(i){
    fill('red')
    ellipse(ObstacleX[i], ObstacleY[i], d, d);
    ObstacleX[i] += vitesse * direction[i];
    if ((ObstacleX[i] > width - d / 2) || (ObstacleX[i] < d / 2)) {
        direction[i] = -direction[i]; // Changer de direction
    }
}

function game() {
    noStroke();
    x = width / 2;
    y = height / 2;
    background(0);
    Chronometre()
    updatePositionEllipse();
    OutOfScreen()
    fill('white')
    ellipse(PosX, PosY, 80, 80)
    
    for(let i = 0; i<nbreObstacles; i++){
        LanceObsctacle(i)
        showObstacle(i); 
        DistancePlayer(i)
    }
}


function DistancePlayer(i) {
    DistanceX = Math.pow(PosX - ObstacleX[i], 2);
    DistanceY = Math.pow(PosY - ObstacleY[i], 2);
    Distance = Math.sqrt(DistanceX + DistanceY);

    if (Distance < 48) {
        aLive = false;
    }
}

function LanceObsctacle(i) {
    if (h_v == 1) {
        if (ObstacleX[i] < 640 && changingX[i] == 0) {
            ObstacleX[i] += 8;
        }

        if (ObstacleX[i] >= 640) {
            changingX[i] = 1;
        }

        if (ObstacleX[i] > 10 && changingX[i] == 1) {
            posObstacleX[i] -= 8;
        }

        if (ObstacleX[i] <= 10) {
            changingX[i] = 0;
        }
        ellipse(ObstacleX[i], ObstacleY[i], 30, 30);
    }

    if (h_v == 0) {
        if (ObstacleY[i] < 480 && changingY[i] == 0) {
            ObstacleY[i] += 8;
        }

        if (ObstacleY[i] >= 480) {
            changingY[i] = 1;
        }

        if (ObstacleY[i] > 10 && changingY[i] == 1) {
            ObstacleY[i] -= 8;
        }

        if (ObstacleY[i] <= 10) {
            changingY[i] = 0;
        }
    }
}

function updatePositionEllipse() {
    if (keyIsDown(LEFT_ARROW)) {
        PosX -= 10;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        PosX += 10;
    }

    if (keyIsDown(UP_ARROW)) {
        PosY -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        PosY += 10;
    }
}

function OutOfScreen() {

    if (PosX > 600) {
        PosX = 600;
        strokeWeight(6);
        stroke('red');
        line(637, 0, 637, 480);
    }

    if (PosX < 40) {
        PosX = 40;
        strokeWeight(6);
        stroke('red');
        line(2, 2, 2, 480);
    }

    if (PosY < 40) {
        PosY = 40;
        strokeWeight(6);
        stroke('red');
        line(2, 2, 637, 2);
    }

    if (PosY > 440) {
        PosY = 440;
        strokeWeight(6);
        stroke('red');
        line(2, 478, 637, 478);
    }
}

function Chronometre() {
    timer = millis() / 10;
    timer = Math.floor(timer) / 100
    textSize(32)
    text(timer, 400, 450)
}

