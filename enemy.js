var Enemy = function(name, level, image)
{
	this.name = name;
	this.level = 0;
	
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.health = 2 + level;
	this.enemyCount = 3 + level;
	
	this.position = new Vector2(0, 0);
	this.direction = 0;
	
	this.damage = 1;
	
	this.exp = 1 + level;
};

Enemy.prototype.draw = function()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y)
};

if(Enemy.enemyCount = 0)
{
	level + 1;
}

//var Slime = new Enemy ("Slime", 2, "test_enemy.png");
