var buttons = [];

var showToolTip = false;

var backgroundImage = document.createElement("img");
backgroundImage.src = "Background.png";

var loaded = false;

var OFFSET_X = canvas.width / 2 - 400;
var OFFSET_Y = canvas.height / 2 - 230;

function BuildShop()
{
	if(!loaded)
	{
		context.fillStyle = "#D1D119";
		context.font = "24px Lucida Sans Unicode";
		context.drawImage(backgroundImage, OFFSET_X, OFFSET_Y);
		context.fillStyle = "#D1D119";
		context.font = "24px Lucida Sans Unicode";
		context.fillText("            : $" + player.money, OFFSET_X + 10, OFFSET_Y + 300);
		var coinImage = document.createElement("img");
		coinImage.src = "coin-pug.png";
		context.drawImage(coinImage, OFFSET_X + 70, OFFSET_Y + 275);
		var shopSignImage = document.createElement("img");
		shopSignImage.src = "Shop Sign.png";
		var shopInfoImage = document.createElement("img");
		shopInfoImage.src = "itemListBox.png";
		context.drawImage(shopInfoImage, (canvas.width/2 - 208), (canvas.height/2 + 35));
		var shopPugImage = document.createElement("img");
		shopPugImage.src = "shopPug.png";
		context.drawImage(shopPugImage, (canvas.width/1.8), (canvas.height/2 + 35));
		
		for(var i = 0; i <= items.length - 1; i++)
		{
			if(i <= 9)
			{
				buttons.push(new Button(items[i], new Vector2(OFFSET_X + (58 + (68 * i)), OFFSET_Y + 60)));
			}
			if(i >= 10 && i <= 19)
			{
				buttons.push(new Button(items[i], new Vector2(OFFSET_X + (58 + (68 * (i - 10))), OFFSET_Y + 128)));
			}
			if(i >= 20 && i <= 29)
			{
				buttons.push(new Button(items[i], new Vector2(OFFSET_X + (58 + (68 * (i - 20))), OFFSET_Y + 196)));
			}
		}
		
		for(var i = 0; i <= buttons.length - 1; i++)
		{
			if(buttons[i].item.bought === true)
			{
				buttons[i].item.name = "Sold Out";
				buttons[i].item.cost = 0;
				buttons[i].item.icon.src = "Sold Out.png";
			}
			buttons[i].draw();
			if(buttons[i].MouseOver() === true && clicked === true && buttons[i].item.bought != true && player.money >= buttons[i].item.cost)
			{
				player.money -= buttons[i].item.cost;
				buttons[i].item.bought = true;
				clicked = false;
				console.log("Just Purchased " + buttons[i].item.name + " for $" + buttons[i].item.cost);
				
				if(buttons[i].item.type === "Weapon")
				{
					player.equippedItem = buttons[i].item.damage;
					console.log(buttons[i].item.damage);
				}
				if(buttons[i].item.type === "Armour")
				{
					player.equippedArmour = buttons[i].item.defense;
					player.defenseA += player.equippedArmour - player.defenseA;
				}	
				if(buttons[i].item.type === "Hat")
				{
					player.equippedHat = buttons[i].item.defense;
					player.defenseH += player.equippedHat - player.defenseH;
				}	
				if(buttons[i].item.type === "Shoes")
				{
					player.equippedShoes = buttons[i].item.defense;
					player.defenseS += player.equippedShoes - player.defenseS;
				}	
				if(buttons[i].item.type === "Pants")
				{
					player.equippedPants = buttons[i].item.defense;
					player.defenseP += player.equippedPants - player.defenseP;
				}
				
				player.defense = player.defenseA + player.defenseH + player.defenseP + player.defenseS;
			}
			
			if(buttons[i].MouseOver() === true)
			{
				
				context.fillStyle = "#D1D119";
				context.font = "24px Lucida Sans Unicode";
				context.fillText("Cost: $" + buttons[i].item.cost, (canvas.width/2 - 180), (canvas.height/2 + 69));
				context.fillStyle = "#D1D119";
				context.font = "24px Lucida Sans Unicode";
				context.fillText(buttons[i].item.name, (canvas.width/2 - 180), (canvas.height/2 + 100));
				context.fillStyle = "#D1D119";
				context.font = "12px Lucida Sans Unicode";
				context.fillText("Attack: +" + buttons[i].item.damage, (canvas.width/2 - 180), (canvas.height/2 + 119));
				context.fillStyle = "#D1D119";
				context.font = "12px Lucida Sans Unicode";
				context.fillText("Armour: +" + buttons[i].item.defense, (canvas.width/2 - 180), (canvas.height/2 + 138));
			}
			
			if(i >= buttons.length)
			{
				loaded = true;
			}
		}
		context.drawImage(shopSignImage, OFFSET_X, OFFSET_Y - 168);
		clicked = false;
	}
}