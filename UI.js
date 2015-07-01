// This is the Health display
/*var Heart = function (image)
{
	this.sprite = document.createElement("img");
	this.image = image;	
	
	//this.position = new Vector2(16, 16);
}

Heart.prototype.draw = function()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y);
}


var heart = new Heart ("notHeart.png");
*/
//var heartImage = "notHeart.png"

function LifeDisplay()
{
	context.fillStyle = "red";
	context.font = "24px Arial";
	var healthText = "Lives: " + player.health;
	context.fillText (healthText, canvas.width - 750, 25 ) 
	
	/*for (var i = 0; i < player.health; i++ ) 
	{
		context.drawImage(heartImage, 20 + ((heartImage.width+2)*i), 10);
	}*/
} 



// This is the money display
function GoldDisplay()
{
	context.fillStyle = "yellow";
	context.font = "24px Arial";
	var moneyText = "Gold: " + player.money;
	context.fillText (moneyText, canvas.width - 100, 25 ) 
} 