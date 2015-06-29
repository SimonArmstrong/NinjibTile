var Player = function(image)
{
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.position = new Vector2(0, 0);
	this.scale = new Vector2(32, 32);
	this.direction = 0;
	
	this.health = 10;
	this.attack = 1;
	this.defense = 1;
	this.exp = 0;
	
	this.money = 0;
}

Player.prototype.draw()
{
	sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y);
}

//Add Drawing methods