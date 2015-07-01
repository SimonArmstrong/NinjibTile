var buttons = [];

var showToolTip = false;

var backgroundImage = document.createElement("img");
backgroundImage.src = "Background.png";

var loaded = false;

function BuildShop()
{
	if(!loaded)
	{
		context.drawImage(backgroundImage, 0, 0);
		context.fillStyle = "#D1D119";
		context.font = "24px Lucida Sans Unicode";
		context.fillText("            : $" + money, 10, 300);
		var coinImage = document.createElement("img");
		coinImage.src = "coin-pug.png";
		context.drawImage(coinImage, 70, 275);
		
		for(var i = 0; i <= items.length - 1; i++)
		{
			if(i <= 9)
			{
				buttons.push(new Button(items[i], new Vector2(58 + (68 * i), 60)));
			}
			if(i >= 10 && i <= 19)
			{
				buttons.push(new Button(items[i], new Vector2(58 + (68 * (i - 10)), 128)));
			}
			if(i >= 20 && i <= 29)
			{
				buttons.push(new Button(items[i], new Vector2(58 + (68 * (i - 20)), 196)));
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
			if(buttons[i].MouseOver() === true && clicked === true && buttons[i].item.bought != true && money >= buttons[i].item.cost)
			{
				money -= buttons[i].item.cost;
				buttons[i].item.bought = true;
				clicked = false;
			}
			
			if(buttons[i].MouseOver() === true)
			{
				//context.fillStyle = "#fff";
				//context.fillText("Cost: $" + buttons[i].item.cost + " \ " + buttons[i].item.name, mousePosition.x, mousePosition.y);
			}
			
			if(i >= buttons.length)
			{
				loaded = true;
			}
		}
		clicked = false;
	}
}