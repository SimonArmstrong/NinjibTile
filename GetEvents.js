var STATE_LOADING = 0;
var STATE_GAME = 1;
var STATE_SHOP = 2;
var STATE_MENU = 3;	
var STATE_GAMEOVER = 4;

var gameState = STATE_LOADING;
var loadSeconds = 2;

var MOVE_UP = false;
var MOVE_DOWN = false;
var MOVE_LEFT = false;
var MOVE_RIGHT = false;

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

var shopToggle = 0;


function UpdateEvents()
{

}

function KeyDown(e)
{
	if(gameState === STATE_GAME)
	{
		switch(e.keyCode)
		{
			//Up movement
			case KEY_W:
				if(canMoveUp)
				{
					ySpeed = player.speed;
					xSpeed = 0; 
					player.direction = 1;
				}
			break;
			//Down movement
			case KEY_S:
				if(canMoveDown)
				{
					ySpeed = -player.speed;
					xSpeed = 0; 
					player.direction = 2;
				}
			break;
			//Left movement
			case KEY_A:
				if(canMoveLeft)
				{
					xSpeed = player.speed;
					ySpeed = 0;
					player.direction = 3;
				}
			break;
			//Right movement
			case KEY_D:
				if(canMoveRight)
				{
					xSpeed = -player.speed;
					ySpeed = 0;
					player.direction = 4;
				}
			break;
			// Press ESC
			case KEY_ESC:
				gameState = STATE_MENU;				
			break;			
			// Press Enter
			case KEY_ENTER:
				shopToggle = 1;
			break;		
		}
	}
	
	if(gameState === STATE_SHOP)
	{
		switch(e.keyCode)
		{
			case KEY_ENTER:
				shopToggle = 0;
			break;
		}
	}
	
	if(gameState === STATE_MENU)
	{
		switch(e.keyCode)
		{
			case KEY_ESC:
				gameState = STATE_GAME
			break;
		}		
	}
	
	if(gameState === STATE_GAMEOVER)
	{
		switch(e.keyCode)
		{
			case KEY_SPACE:
				gameState = STATE_LOADING
			break;
		}		
	}		
	if(shopToggle === 1)
	{
		gameState = STATE_SHOP;
	}
	else
	{
		gameState = STATE_GAME;
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