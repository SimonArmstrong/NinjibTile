var Player = function(image)
{
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.position = new Vector2(32, 32);
	this.scale = new Vector2(32, 32);
	this.direction = 0;
	
	this.health = 3;
	this.attack = 1;
	this.defense = 1;
	this.exp = 0;
	this.level = 1;
	
	this.speed = 180;
	
	this.money = 0;
	
	/*
	this.FACE_UP = new Collider("player", new Vector2(this.scale.x, 1), this.position);
	this.FACE_DOWN = new Collider("player", new Vector2(this.scale.x, 1), new Vector2(0, this.position.y + this.scale.y));
	this.FACE_LEFT = new Collider("player", new Vector2(1, this.scale.y), new Vector2(this.position.y + this.scale.y, 0));
	this.FACE_RIGHT = new Collider("player", new Vector2(1, this.scale.y), new Vector2(this.position.x + this.scale.x, this.position.y));
	*/
	
	//this.collider = new Collider("player", this.scale, this.position);
}

Player.prototype.draw = function()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y);
}

if(Player.exp = 5)
{
	Player.health + 1;
	Player.level + 1;
	player.exp = 0;
	if(player.exp = 10)
	{
		player.health + 1;
		player.level + 1;
		player.exp = 0;
		if(player.exp = 20)
		{
			player.health + 3;
			player.level + 1;
			player.exp = 0;
		}
	}
}

//Add Drawing methods