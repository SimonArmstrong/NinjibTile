var Rat = new Enemy("Rat", 1, "Rat_Image.png");

var xSpeed = 0;
var ySpeed = 0;

var enemySpeedX = 0;
var enemySpeedY = 0;


function EnemyAI()
{
	var enemyRandDirect = Math.floor((Math.random() * 4) + 1)
	switch(enemyRandDirect)
	{
		case 1:
		enemySpeedY = Rat.speed;
		enemySpeedX = 0;
		break;
		case 2:
		enemySpeedY = -Rat.speed;
		enemySpeedX = 0;
		break;
		case 3:
		enemySpeedX = Rat.speed;
		enemySpeedY = 0;
		break;
		case 4:
		enemySpeedX = -Rat.speed;
		enemySpeedY = 0;
		break;
	}
}
EnemyAI();
function BuildEntities(deltaTime)
{
	
	Rat.position.y -= enemySpeedX * deltaTime;
	Rat.position.x -= enemySpeedY * deltaTime;
	
	player.position.y -= ySpeed * deltaTime;
	player.position.x -= xSpeed * deltaTime;	

	Rat.draw();
	player.draw();
}