//Background music
var musicBackground = new Howl({
	urls: ["Legend of Zelda - NES - Dungeon Theme.mp3"], 
	loop: false, 
	buffer: true, 
	volume: 0.3
} );	

var deathSound = new Howl({
	urls: ["eeyow.mp3"], 
	loop: false, 
	buffer: true, 
	volume: 0.7
} );

musicBackground.play();				

var mistEmitter1 = createMistEmitter1("mist1.png", canvas.width/2, canvas.height/2);
var mistEmitter2 = createMistEmitter2("mist2.png", canvas.width/2, canvas.height/2);
var mistEmitter3 = createMistEmitter3("mist3.png", canvas.width/2, canvas.height/2);

function run()
{
	var deltaTime = getDeltaTime();
		mistEmitter1.update(deltaTime);
		mistEmitter2.update(deltaTime);		
		mistEmitter3.update(deltaTime);		
		
		//mistEmitter1.draw();
		//mistEmitter2.draw();
		//mistEmitter3.draw();
	if (gameState === STATE_LOADING)
	{
		var backgroundImage = document.createElement("img");
		backgroundImage.src = "Controls.png";
		context.drawImage(backgroundImage, 0, 0);
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
		BuildWalls(deltaTime);
		GoldDisplay();
		LifeDisplay();
		WaveDisplay();
		if(doorOpen)
		{
			mistEmitter1.draw();
			mistEmitter2.draw();
			mistEmitter3.draw();
		}
		if(player.health <= 0)
		{
			gameState = STATE_GAMEOVER;
			deathSound.play();
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
		var backgroundImage = document.createElement("img");
		backgroundImage.src = "Black.png";
		context.drawImage(backgroundImage, 0, 0);
	
		context.fillStyle = "#06f828";
		context.font="36px Arial";
		context.fillText("GAME OVER", 200, 240);
		
		context.fillStyle = "#06f828";
		context.font="18px Arial";
		context.fillText("Press '  F5  ' to continue...", 200, 280);
	}		
}

States();