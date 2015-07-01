//Background music
var musicBackground = new Howl({
	urls: ["Castlevania-II-Simons-Quest-NES-Music-Castle-Theme-01-Dwellings-of-Doom.mp3.mp3"], 
	loop: false, 
	buffer: true, 
	volume: 0.5
} );	

musicBackground.play();				

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
		UpdateEvents();
		BuildCollision(deltaTime);
		BuildMap();
		BuildEntities(deltaTime);
		BuildWalls();
		GoldDisplay();
		LifeDisplay();

		if(player.health <= 0)
		{
			gameState = STATE_GAMEOVER;
		}				
	}	
	
	if (gameState === STATE_SHOP)
	{		
		BuildShop();
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