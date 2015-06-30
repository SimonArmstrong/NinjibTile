var Rat = new Enemy("Rat", 1, "Rat_Image.png");

var xSpeed = 0;
var ySpeed = 0;

function BuildEntities(deltaTime)
{
	player.position.y -= ySpeed * deltaTime;
	player.position.x -= xSpeed * deltaTime;

	Rat.draw();
	player.draw();
}