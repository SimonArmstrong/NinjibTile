function GetEvents()
{
	var KEY_SPACE = 32;
	var KEY_UP = 38;
	var KEY_DOWN = 40;
	var KEY_LEFT = 37;
	var KEY_RIGHT = 39;

	var KEY_W = 87;
	var KEY_A = 65;
	var KEY_S = 83;
	var KEY_D = 68;
	var KEY_SHIFT = 16;

	function KeyDown(e)
	{
		switch(e.keyCode)
		{
			//Up movement
			case KEY_W || KEY_UP:
				ySpeed = player.speed;
				xSpeed = 0; 
				player.direction = 1;
			break;
			//Down movement
			case KEY_S || KEY_DOWN:
				ySpeed = -player.speed;
				xSpeed = 0; 
				player.direction = 2;
			break;
			//Left movement
			case KEY_A || KEY_LEFT:
				xSpeed = player.speed;
				ySpeed = 0;
				player.direction = 3;
			break;
			//Right movement
			case KEY_D || KEY_RIGHT:
				xSpeed = -player.speed;
				ySpeed = 0;
				player.direction = 4;
			break;
		}
	}
	window.addEventListener('keydown', KeyDown);

	function KeyUp(e)
	{		
		switch(e.keyCode)
		{
			//Up stopping
			case KEY_W || KEY_UP:
				ySpeed = 0; 
			break;
			//Down stopping
			case KEY_S || KEY_DOWN:
				ySpeed = 0; 
			break;
			//Left stopping
			case KEY_A || KEY_LEFT:
				xSpeed = 0;
			break;
			//Right Stopping
			case KEY_D || KEY_RIGHT:
				xSpeed = 0;
			break;
		}
	}
	window.addEventListener('keyup', KeyUp);
}