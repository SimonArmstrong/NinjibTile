var Rat = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat2 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat3 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat4 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat5 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat6 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat7 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat8 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));


var enemies = [];

//player vars
xSpeed = 0;
ySpeed = 0;

enemies.push(Rat);
enemies.push(Rat2);
enemies.push(Rat3);
enemies.push(Rat4);
enemies.push(Rat5);
enemies.push(Rat6);
enemies.push(Rat7);
enemies.push(Rat8);

function BuildEntities(deltaTime)
{
	player.trigger = new Collider("player_trigger", new Vector2(256, 256), new Vector2(player.position.x - 114, player.position.y - 114));
	for(var i = 0; i <= enemies.length - 1; i++)
	{
		enemies[i].ENEMY_UP     = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + (enemies[i].scale.x / 2), enemies[i].position.y));
		enemies[i].ENEMY_RIGHT  = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + enemies[i].scale.x, enemies[i].position.y + (enemies[i].scale.y / 2)));
		enemies[i].ENEMY_LEFT   = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x, enemies[i].position.y + (enemies[i].scale.y / 2)));
		enemies[i].ENEMY_BOTTOM = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + (enemies[i].scale.x / 2), enemies[i].position.y + enemies[i].scale.y));		
		
		/*
		if(enemies[i].collider.isTouching(player.trigger))
		{
			if(player.position.y < enemy.position.y)
			{
				enemies[i].enemyRandDirect = 4;
			}
			if(player.position.y > enemy.position.y)
			{
				
			}
		}
		*/
	}
	
	for(var i = 0; i <= enemies.length - 1; i++)
	{
		for(var j = 0; j <= walls.length - 1; j++)
		{
			if(enemies[i].ENEMY_UP.isTouching(walls[j].collider) === true)
			{
				//4 = DOWN
				enemies[i].enemyRandDirect = 4;
			}
			if(enemies[i].ENEMY_RIGHT.isTouching(walls[j].collider) === true)
			{
				//1 = LEFT
				enemies[i].enemyRandDirect = 1;
			}

			if(enemies[i].ENEMY_BOTTOM.isTouching(walls[j].collider) === true)
			{
				//3 = UP
				enemies[i].enemyRandDirect = 3;
			}

			if(enemies[i].ENEMY_LEFT.isTouching(walls[j].collider) === true)
			{
				//2 = RIGHT
				enemies[i].enemyRandDirect = 2;
			}
		}
	
	}
	
	EnemyAI();
	
	player.position.y -= ySpeed * deltaTime;
	player.position.x -= xSpeed * deltaTime;	

		
	for(var i = 0; i <= enemies.length - 1; i++)
	{
		enemies[i].enemyMTime -= deltaTime;
		
		if(enemies[i].enemyMTime <= 0)
		{
			enemies[i].enemyRandDirect = Math.floor((Math.random() * 4) + 1);
			enemies[i].enemyMTime = 2;
		}
		
		enemies[i].position.y -= enemies[i].enemySpeedX * deltaTime;
		enemies[i].position.x -= enemies[i].enemySpeedY * deltaTime;
		enemies[i].draw();
		
		//Enemy collider draw
		/*
		enemies[i].ENEMY_UP.draw("#f00");
		enemies[i].ENEMY_RIGHT.draw("#f00");
		enemies[i].ENEMY_LEFT.draw("#f00");
		enemies[i].ENEMY_BOTTOM.draw("#f00");
		*/
	}
	player.draw();
	sword.draw();
}
function EnemyAI()
{
	for(var i = 0; i <= enemies.length - 1; i++)
	{
		switch(enemies[i].enemyRandDirect)
		{
			case 1:
			enemies[i].enemySpeedY = enemies[i].speed;
			enemies[i].enemySpeedX = 0;
			break;
			case 2:
			enemies[i].enemySpeedY = -enemies[i].speed;
			enemies[i].enemySpeedX = 0;
			break;
			case 3:
			enemies[i].enemySpeedX = enemies[i].speed;
			enemies[i].enemySpeedY = 0;
			break;
			case 4:
			enemies[i].enemySpeedX = -enemies[i].speed;
			enemies[i].enemySpeedY = 0;
			break;
		}
	}
}
