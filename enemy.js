var Enemy = function(name, level, image)
{
	this.name = name;
	this.level = 0;
	
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.health = 2 + level;
	this.enemyCount = 3 + level;
	
	this.position = new Vector2(Math.floor((Math.random() * 702) + 34), Math.floor((Math.random() * 382) + 34));
	this.scale = new Vector2(32, 32);
	this.direction = 0;
	
	this.speed = player.speed/2;
	
	this.damage = 1;
	
	this.isDead = false;
	
	this.exp = 1 + level;
};

Enemy.prototype.draw = function()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y)
};

/*
if(enemy.position.x > canvas.width)
{
	enemy.position.x = 0;
}

if(enemy.position.x < canvas.width)
{
	enemy.position.x = canvas.width;
}
*/
/*
if(Enemy.enemyCount = 0)
{
	level += 1;
}

if(enemy.health = 0)
{
	player.exp += enemy.exp;
}
*/


//var Slime = new Enemy ("Slime", 2, "test_enemy.png");
