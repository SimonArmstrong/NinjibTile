var Enemy = funtion(name, level, image)
{
	this.name = name;
	this.level = level;
	
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.health = level*2;
	
	this.position = new Vector2(0, 0);
	this.direction = 0;
};

Enemy.prototype.draw = function()
{
	sprite.src = this.image;
	context.drawImage(this.image, this.position.x, this.position.y)
};

var Rat = new Enemy ("Rat", 1, "test_enemy.png");
var Slime = new Enemy ("Slime", 2, "test_enemy.png");
