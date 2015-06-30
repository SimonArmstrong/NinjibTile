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
	var KEY_ESC = 27;
	var KEY_ENTER = 13;
	
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
			// Press Space
			case KEY_SPACE && (gameState === STATE_GAMEOVER):
				gameState = STATE_LOADING;
			break;
			// Press ESC on Game State
			case KEY_ESC && (gameState === STATE_GAME):
				gameState = STATE_MENU;
			break;				
			// Press ESC on Menu State
			case KEY_ESC && (gameState === STATE_MENU):
				gameState = STATE_GAME;			
			break;			
			// Press Enter on Game State
			case KEY_ENTER && (gameState === STATE_GAME):
				gameState = STATE_SHOP;
			// Press Enter on Shop State
			case KEY_ENTER && (gameState === STATE_SHOP):
					gameState = STATE_GAME;				
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