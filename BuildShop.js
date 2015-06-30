var buttons = [];

function BuildShop()
{
	for(var i = 0; i <= items.length - 1; i++)
	{
		buttons.push(new Button(items[i].name, new Vector2(0, 0 - (64 * i) - 10)));
		buttons[i].draw();
	}
}