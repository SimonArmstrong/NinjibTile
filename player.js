var Player = function(image)
{
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.position = new Vector2(canvas.width / 2, 0);
	this.scale = new Vector2(32, 32);
	this.direction = 0;
	
	this.collider = new Collider("player_hitbox", this.scale, this.position);
	
	this.health = 3;
	
	this.defenseA = 0;
	this.defenseH = 0;
	this.defenseP = 0;
	this.defenseS = 0;
	
	this.defense = 0; //this.defenseA + this.defenseH + this.defenseP + this.defenseS;
	
	this.exp = 0;
	this.level = 1;
	
	this.speed = 180;
	
	this.trigger;
	this.invulnerabilityTimer = 0;
	this.blinkTime = 0;
	this.blinkSpeed = 0.5;
	
	this.item;
	
	this.equippedItem;
	this.equippedArmour;
	this.equippedHat;
	this.equippedShoes;
	this.equippedPants;
	
	this.money = 0;
	
	/*
	this.FACE_UP = new Collider("player", new Vector2(this.scale.x, 1), this.position);
	this.FACE_DOWN = new Collider("player", new Vector2(this.scale.x, 1), new Vector2(0, this.position.y + this.scale.y));
	this.FACE_LEFT = new Collider("player", new Vector2(1, this.scale.y), new Vector2(this.position.y + this.scale.y, 0));
	this.FACE_RIGHT = new Collider("player", new Vector2(1, this.scale.y), new Vector2(this.position.x + this.scale.x, this.position.y));
	*/
	
	//this.collider = new Collider("player", this.scale, this.position);
}

Player.prototype.draw = function(deltaTime, image)
{
	if(this.invulnerabilityTimer > 0)
	{
		if(this.blinkTime > 0)
		{
			this.blinkTime -= deltaTime;
		}
		if(this.blinkTime < 0.2)
		{
			context.drawImage(image, this.position.x, this.position.y);
			if(this.blinkTime <= 0)
			{
				this.blinkTime = this.blinkSpeed;
			}
		}
	}
	else
	{
		this.sprite.src = this.image;
		context.drawImage(this.sprite, this.position.x, this.position.y);
	}
}

var player = new Player("test_player.png");

var FACE_UP = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + (player.scale.x / 2), player.position.y));
var FACE_RIGHT = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + player.scale.x, player.position.y + (player.scale.y / 2)));
var FACE_LEFT = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x, player.position.y + (player.scale.y / 2)));
var FACE_BOTTOM = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + (player.scale.x / 2), player.position.y + player.scale.y));

player.equippedItem = items[16].damage;
player.equippedArmour = items[21].defense;
player.equippedHat = items[21].defense
player.equippedShoes = items[21].defense;
player.equippedPants = items[21].defense

if(player.exp = 5)
{
	player.health + 1;
	player.level + 1;
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