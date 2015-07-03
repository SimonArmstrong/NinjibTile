
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
	var coinImage = document.createElement("img");
	coinImage.src = "coin-pug.png";
	
		for(var i = 0; i < player.health; i++)
	{
		context.drawImage(coinImage,  canvas.width - 140, 0 );
	}

	context.fillStyle = "yellow";
	context.font = "24px Lucida Sans Unicode";
	var moneyText = "      $" + player.money;
	context.fillText (moneyText, canvas.width - 150, 25 ); 
} 

function LifeDisplay()
{
	//context.fillStyle = "white";
	//context.font = "25px Lucida Sans Unicode";
	//var healthText = "Lives: " //+ player.health;
	//context.fillText (healthText, canvas.width - 750, 25 );

	var heartImageN = document.createElement("img");
	heartImageN.src = "notHeart3.png";
	var heartImageA = document.createElement("img");
	heartImageA.src = "notHeartArmour.png";
	
	/*if (player.health >= 4)
	{
		var heartImage = heartImageA
	}
	else if (player.health <= 3 && player.health > 0)
	{
		var heartImage = heartImageN
	}*/
	
	
	//var heartImage.position = new Vector2 (16, 16);
	
	for(var i = 0; i < player.health; i++)
	{
		context.drawImage(heartImageN, 125  + ((32 + 2) * i), -1);
	}
	
	for(var i = 0; i < player.defense; i++)
	{
		context.drawImage(heartImageA, 261 + ((32 + 2) * i), -1);
	}
	

} 

function WaveDisplay()
{
	context.fillStyle = "white";
	context.font = "24px Lucida Sans Unicode";
	var waveText = "WAVE:" + wave;
	context.fillText (waveText, canvas.width - 250, 25 );
}
