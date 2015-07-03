var Enemy = function(name, level, image, dir)
{
	this.name = name;
	this.level = level;
	this.position = new Vector2(Math.floor( 64 +(Math.random() * 1400) - 64), Math.floor( 128 + (Math.random() * 500) + 34));
	
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.health = level;
	this.maxHealth = level;
	
	this.healthMeter = new HealthMeter(this);
	
	this.scale = new Vector2(32, 32);
	this.direction = 0;
	
	this.collider = new Collider(name, this.scale, this.position);
	
	this.speed = player.speed * (1/3);
	this.enemyRandDirect = dir;
	this.damage = 1;
	this.isDead = false;
	this.exp = 1 + level;
	
	this.money = Math.floor((level*2) - (level/2));
	if(this.money > 1)
	{
		console.log ("Level", this.level, this.name, " has ", this.health, " health and will drop ", this.money, " Pug Coins!");
	}
	else
	{
		console.log ("Level", this.level, this.name, " has ", this.health, " health and will drop ", this.money, " Pug Coin!");
	}

	
	this.ENEMY_UP     = new Collider("enemy", new Vector2(1, 1), new Vector2(this.position.x + (this.scale.x / 2), this.position.y));
	this.ENEMY_RIGHT  = new Collider("enemy", new Vector2(1, 1), new Vector2(this.position.x + this.scale.x, this.position.y + (this.scale.y / 2)));
	this.ENEMY_LEFT   = new Collider("enemy", new Vector2(1, 1), new Vector2(this.position.x, this.position.y + (this.scale.y / 2)));
	this.ENEMY_BOTTOM = new Collider("enemy", new Vector2(1, 1), new Vector2(this.position.x + (this.scale.x / 2), this.position.y + this.scale.y));
	
	
	this.BehaviourType = name;
	this.enemyMTime = 2;
	this.enemySpeedX = 0;
	this.enemySpeedY = 0;
};

Enemy.prototype.draw = function()
{
	this.healthMeter = new HealthMeter(this);
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y)
};


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
