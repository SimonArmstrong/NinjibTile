var Enemy = function(name, level, image)
{
	this.name = name;
	this.level = 0;
	
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.health = 2 + level;
	this.enemyCount = 3 + level + 1;
	
	this.position = new Vector2(0, 0);
	this.direction = 0;
};

Enemy.prototype.draw = function()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y)
};

//var Slime = new Enemy ("Slime", 2, "test_enemy.png");
