var Rat = new Enemy("Rat", 1, "Rat_Image.png");

var xSpeed = 0;
var ySpeed = 0;

var enemySpeedX = Math.floor(Math.random()*Rat.speed + 1);
var enemySpeedY = Math.floor(Math.random()*Rat.speed + 1);

function BuildEntities(deltaTime)
{
	Rat.position.y -= enemySpeedX * deltaTime;
	Rat.position.x -= enemySpeedY * deltaTime;
	
	player.position.y -= ySpeed * deltaTime;
	player.position.x -= xSpeed * deltaTime;	

	Rat.draw();
	player.draw();
}