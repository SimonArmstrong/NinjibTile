var Rat = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat2 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat3 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat4 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat5 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat6 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat7 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
var Rat8 = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));

var enemies = [];

var left  = document.createElement("img");
var right = document.createElement("img");
var up    = document.createElement("img");
var down  = document.createElement("img");


left.src = "test_player5.png";
right.src = "test_player4.png";
up.src = "test_player6.png";
down.src = "test_player3.png";

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
	if(player.direction == 4)
		{
			sword.position = new Vector2(player.position.x + 25, player.position.y - 15);
			sword.image = ("sword2.png");
			if(sword.isAttacking == true && player.direction == 4)
			{
				player.image = ("test_player4.png");
			}
		}
		if(player.direction == 2)
		{
			sword.position = new Vector2(player.position.x - 10, player.position.y + 20);
			sword.image = ("sword3.png");
			if(sword.isAttacking == true && player.direction == 2)
			{
				player.image = ("test_player3.png");
			}
		}
		if(player.direction == 3)
		{
			sword.position = new Vector2(player.position.x - 50, player.position.y - 15);
			sword.image = ("sword4.png");
			if(sword.isAttacking == true && player.direction == 3)
			{
				player.image = ("test_player5.png");
			}
		}
		if(player.direction == 1)
		{
			sword.position = new Vector2(player.position.x - 5, player.position.y - 50);
			sword.image = ("sword.png");
			if(sword.isAttacking == true && player.direction == 1)
			{
				player.image = ("test_player6.png");
			}
		}
	
	sword.update();
	
	player.trigger = new Collider("player_trigger", new Vector2(256, 256), new Vector2(player.position.x - 97, player.position.y - 105));
	
	for(var i = 0; i <= enemies.length - 1; i++)
	{
		enemies[i].ENEMY_UP     = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + (enemies[i].scale.x / 2), enemies[i].position.y));
		enemies[i].ENEMY_RIGHT  = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + enemies[i].scale.x, enemies[i].position.y + (enemies[i].scale.y / 2)));
		enemies[i].ENEMY_LEFT   = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x, enemies[i].position.y + (enemies[i].scale.y / 2)));
		enemies[i].ENEMY_BOTTOM = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + (enemies[i].scale.x / 2), enemies[i].position.y + enemies[i].scale.y));		
		
		if(enemies[i].collider.isTouching(player.trigger))
		{
			if(enemies[i].position.y < player.position.y + 16)
			{
				enemies[i].enemyRandDirect = 4;
			}
			if(enemies[i].position.y > player.position.y - 16)
			{
				enemies[i].enemyRandDirect = 3;
			}
			if(enemies[i].position.y >= player.position.y - 16 && enemies[i].position.y <= player.position.y + 16)
			{
				if(enemies[i].position.x < player.position.x)
				{
					enemies[i].enemyRandDirect = 2;
				}
				if(enemies[i].position.x > player.position.x)
				{
					enemies[i].enemyRandDirect = 1;
				}
			}
			enemies[i].position.y -= enemies[i].enemySpeedX * deltaTime;
			enemies[i].position.x -= enemies[i].enemySpeedY * deltaTime;
		}
		else
		{
			//Enemy wanders
			enemies[i].enemyMTime -= deltaTime;
		
			if(enemies[i].enemyMTime <= 0)
			{
				enemies[i].enemyRandDirect = Math.floor((Math.random() * 4) + 1);
				enemies[i].enemyMTime = 2;
			}
			
			enemies[i].position.y -= enemies[i].enemySpeedX * deltaTime;
			enemies[i].position.x -= enemies[i].enemySpeedY * deltaTime;
		}
		player.trigger.draw("#f00");
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

		
		if(sword.isAttacking == true)
		{
			if(sword.collider.isTouching(enemies[i].collider))
			{
				enemies[i].health -= sword.damage;
				if(enemies[i].health > 0)
				{
					
				}
				console.log ("hit");
			}
			sword.draw();
		}
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
