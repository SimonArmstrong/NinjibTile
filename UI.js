
/*
var Heart = function(image)
{
	this.sprite = document.createElement("img");
	this.image = image;
	
	this.position = new Vector2(16, 16);
	this.scale = new Vector2(16, 16);
}

Heart.prototype.draw = function()
{
	this.sprite.src = this.image;
	context.drawImage(this.sprite, this.position.x, this.position.y);
}

var Heart = new heartImage("notHeart.png");
	
	var lives = 3;
	
for(var i=0; i<lives; i++)
	{
		context.drawImage(heartImage, 20 + ((Heart.heartImage+2)*i), 10);
	}
	
	
}*/

// This is the money display
function GoldDisplay()
{
	context.fillStyle = "yellow";
	context.font = "24px Arial";
	var moneyText = "Gold: " + player.money;
	context.fillText (moneyText, canvas.width - 100, 25 ); 
} 

function LifeDisplay()
{
	context.fillStyle = "red";
	context.font = "24px Arial";
	var healthText = "Lives: " + player.health;
	context.fillText (healthText, canvas.width - 750, 25 );

	var heartImage = document.createElement("img");
	heartImage.src = "notHeart.png";
	
	//var heartImage.position = new Vector2 (16, 16);
	
	for(var i = 0; i < player.health; i++)
	{
		context.drawImage(heartImage, 200 + ((16 + 2) * i), 10);
	}
	

} 



