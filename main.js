var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//-------------------- Don't modify anything above here-----------------------------------------------------------------------------------------------

GetEvents();

function run()
{
	var deltaTime = getDeltaTime();
	
	if (gameState === STATE_LOADING)
	{
		loadSeconds -= deltaTime;
		
		if (loadSeconds <= 0)
		{
			gameState = STATE_GAME;
		}
	}
		
	if (gameState === STATE_GAME)
	{
		BuildCollision();
		BuildMap();
		BuildEntities(deltaTime);
		BuildWalls();
		
		if(player.health <= 0)
		{
			gameState = STATE_GAMEOVER;
		}				
	}	
	
	if (gameState === STATE_SHOP)
	{
		context.fillStyle = "#000";
		context.font="24px Arial";
		context.fillText("SHOP", 200, 240);

		//BuildShop();
	}
	
	if (gameState === STATE_MENU)
	{
		context.fillStyle = "#000";
		context.font="24px Arial";
		context.fillText("MENU", 200, 240);		
	}
	
	 if (gameState === STATE_GAMEOVER)
	{
		context.fillStyle = "#000";
		context.font="24px Arial";
		context.fillText("GAME OVER", 200, 240);
		
		context.fillStyle = "#000";
		context.font="12px Arial";
		context.fillText("Press 'SPACE' to continue...", 200, 280);
	}		
}

States();