let PosX = 100;
let PosY = 100;

let d = 20;

let ObstacleX = 300;
let ObstacleY = 300;

let direction = 2;
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

let changingX = 0;
let changingY = 0;

let obstacleSpeed = 0;

function setup() {
    createCanvas(640, 480);

}

function countSeconds() {

    secondes = Math.trunc((millis() / 1000))
}

function draw() {

    if (aLive == true) {
        game();
    } else {

    }
}

function game() {
    
    countSeconds()
    noStroke();
    x = width / 2;
    y = height / 2;

    background(0);
    LanceObsctacle()
    console.log(LanceObsctacle)
    Chronometre()
    
    updatePositionEllipse();
   

    
    OutOfScreen()
    
    
    fill('white')
    
    DistancePlayer()
    



    ellipse(PosX, PosY, 80, 80)
    
    fill('orange')
    


    fill('red')
    
    ellipse(ObstacleX, ObstacleY, d, d);
    ObstacleX += vitesse * direction;
    if ((ObstacleX > width - d / 2) || (ObstacleX < d / 2)) {
        direction = -direction; // Changer de direction

        
    }

}
function LanceObsctacle() {

    if (h_v == 1) {
        if (ObstacleX < 640 && changingX == 0) {
            ObstacleX += 8;
        }

        if (ObstacleX >= 640) {
            changingX = 1;
        }

        if (ObstacleX > 10 && changingX == 1) {
            posObstacleX -= 8;
        }

        if (ObstacleX <= 10) {
            changingX = 0;
        }
        ellipse(ObstacleX, ObstacleY, 30, 30);
    }


    if (h_v == 0) {
        if (ObstacleY < 480 && changingY == 0) {
            ObstacleY += 8;
        }

        if (ObstacleY >= 480) {
            changingY = 1;
        }

        if (ObstacleY > 10 && changingY == 1) {
            ObstacleY -= 8;
        }

        if (ObstacleY <= 10) {
            changingY = 0;
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

function DistancePlayer() {

    DistanceX = Math.pow(PosX - ObstacleX, 2);
    DistanceY = Math.pow(PosY - ObstacleY, 2);
    Distance = Math.sqrt(DistanceX + DistanceY);

    if (Distance < 48) {
        fill('black');

        textSize(48)
        fill('white')
        textFont('Roboto Condensed');

        text('You Loose', 170, 240)
        fill('red')

        text('!', 390, 240)

        textSize(36)

        fill('white')

        text('Your Score :', 170, 340)

        fill('red')

        text(timer, 360, 340)
        aLive = false;
    }
}