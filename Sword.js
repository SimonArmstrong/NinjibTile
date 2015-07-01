var Sword = function(image)
{
	this.damage = player.equippedItem
	this.sprite = document.createElement("img")
	
	this.position = player.position;
	this.scale = new Vector2 (32, 32);
	
	this.collider = new Collider("sword", this.scale, this.position);
	
	this.isAttacking = false;
	
	this.image = image;
}
Sword.prototype.draw = function()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y);
}

var sword = new Sword("sword.png");

var KEY_H = 72;

function keyDown(e)
{
	if(e.keyCode == KEY_H)
	{
		sword.isAttacking = true;
	}
}
window.addEventListener('keydown', keyDown);
function keyUp(e)
{
	if(e.keyCode == KEY_H)
	{
		sword.isAttacking = false;
	}
}
window.addEventListener('keyup', keyUp);
