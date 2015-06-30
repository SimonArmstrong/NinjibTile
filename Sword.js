var Sword = function(image)
{
	this.damage = player.equippedItem
	this.sprite = document.createElement("img")
	
	this.position = new Vector2 (32, 32);
	
	this.image = image;
}
Sword.prototype.draw()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y);
}

var sword = new Sword("sword.png");

