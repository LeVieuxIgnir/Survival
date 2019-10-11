let changingX = 0;
let changingY = 0;



function LanceObsctacle(i) {

    if (h_v == 1) {
        if (posObstacleX < 630 && changingX == 0) {
            posObstacleX += obstacleSpeed;
        }

        if (posObstacleX >= 630) {
            changingX = 1;
        }

        if (posObstacleX > 10 && changingX == 1) {
            posObstacleX -= obstacleSpeed;
        }

        if (posObstacleX <= 10) {
            changingX = 0;
        }
        ellipse(posObstacleX, posObstacleY, 30, 30);
    }


    if (h_v[i] == 0) {
        if (posObstacleY < 470 && changingY == 0) {
            posObstacleY += obstacleSpeed;
        }

        if (posObstacleY >= 470) {
            changingY = 1;
        }

        if (posObstacleY > 10 && changingY == 1) {
            posObstacleY -= obstacleSpeed;
        }

        if (posObstacleY <= 10) {
            changingY = 0;
        }

    }
}