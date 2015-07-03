var enemies = [];
var left  = document.createElement("img");
var right = document.createElement("img");
var up    = document.createElement("img");
var down  = document.createElement("img");

left.src = "test_player5.png";
right.src = "test_player4.png";
up.src = "test_player6.png";
down.src = "test_player3.png";

var wave = 0;

function Spawn() 
{
	enemies = [];
	
	var Rat    = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
	var Rat2   = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
	var Rat3   = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
	var Rat4   = new Enemy("Rat", 1, "Rat_Image.png", Math.floor((Math.random() * 4) + 1));
	var Slime  = new Enemy("Slime", 2, "slime_right.png", Math.floor((Math.random() * 4) + 1));
	var Slime2 = new Enemy("Slime", 2, "slime_right.png", Math.floor((Math.random() * 4) + 1));
	var Slime3 = new Enemy("Slime", 2, "slime_right.png", Math.floor((Math.random() * 4) + 1));
	var Slime4 = new Enemy("Slime", 2, "slime_right.png", Math.floor((Math.random() * 4) + 1));
	
	enemies.push(Rat);
	enemies.push(Rat2);
	enemies.push(Rat3);
	enemies.push(Rat4);
	enemies.push(Slime);
	enemies.push(Slime2);
	enemies.push(Slime3);
	enemies.push(Slime4);
}


var attackTime = 0;
var doorOpen = true;
//player vars
xSpeed = 0;
ySpeed = 0;

Spawn();

function BuildEntities(deltaTime)
{

	if(enemies.length <= 0)
	{
		levelClear = true;
		wave++;
		player.position = new Vector2(canvas.width / 2, 32);
		player.collider.position = new Vector2(canvas.width / 2, 32);
		Spawn();
		for(var i = 0; i <= enemies.length - 1; i++)
		{	
			enemies[i].level += wave;
			enemies[i].maxHealth = enemies[i].level;
			enemies[i].health = enemies[i].level;
			enemies[i].collider.draw("#fff");
		}
	}
	
	if(player.direction == 4)
		{
			sword.position = new Vector2(player.position.x + 25, player.position.y + 8);
			sword.image = ("sword2.png");
			sword.scale = new Vector2(32,16);
			if(sword.isAttacking == true && player.direction == 4)
			{
				player.image = ("test_player8.png");
			}
			else
			{
				player.image = ("test_player4.png");
			}
			
		}

		if(player.direction == 2)
		{
			sword.position = new Vector2(player.position.x + 7, player.position.y + 25);
			sword.image = ("sword3.png");
			sword.scale = new Vector2(16,32);
			if(sword.isAttacking == true && player.direction == 2)
			{
				player.image = ("test_player3.png");
			}
			else
			{
				player.image = ("test_player.png");
			}
		}
		if(player.direction == 3)
		{
			sword.position = new Vector2(player.position.x - 25, player.position.y + 7);
			sword.image = ("sword4.png");
			sword.scale = new Vector2(32,16);
			if(sword.isAttacking == true && player.direction == 3)
			{
				player.image = ("test_player9.png");
			}
			else
			{
				player.image = ("test_player5.png");
			}
		}
		if(player.direction == 1)
		{
			sword.position = new Vector2(player.position.x + 10, player.position.y - 25);
			sword.image = ("sword.png");
			sword.scale = new Vector2(16,32);
			if(sword.isAttacking == true && player.direction == 1)
			{
				player.image = ("test_player7.png");
			}
			else
			{
				player.image = ("test_player6.png");
			}
		}
	sword.update();
	
	player.trigger = new Collider("player_trigger", new Vector2(256, 256), new Vector2(player.position.x - 114, player.position.y - 114));
	
	for(var i = 0; i <= enemies.length - 1; i++)
	{
		if(enemies[i].BehaviourType === "Rat")
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
			if(player.defense > 0)
			{
				//if(player.collider.isTouching(enemies[i].collider))
				{
					if(player.invulnerabilityTimer <= 0)
					{
						if(FACE_UP.isTouching(enemies[i].collider))
						{
							player.defense -= 1;
							player.position.y += 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_BOTTOM.isTouching(enemies[i].collider))
						{
							player.defense -= 1;
							player.position.y -= 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_LEFT.isTouching(enemies[i].collider))
						{
							player.defense -= 1;
							player.position.x += 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_RIGHT.isTouching(enemies[i].collider))
						{
							player.defense -= 1;
							player.position.x -= 32;
							player.invulnerabilityTimer = 5;
						}
					}
				}
			}
			else
			{
				//if(player.collider.isTouching(enemies[i].collider))
				{
					if(player.invulnerabilityTimer <= 0)
					{
						if(FACE_UP.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.y += 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_BOTTOM.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.y -= 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_LEFT.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.x += 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_RIGHT.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.x -= 32;
							player.invulnerabilityTimer = 5;
						}
					}
				}
			}
			if(player.invulnerabilityTimer > 0)
			{
				player.invulnerabilityTimer -= deltaTime;
			}
			//console.log(player.invulnerabilityTimer);
		}
	
		if(enemies[i].BehaviourType === "Slime")
		{
			enemies[i].ENEMY_UP     = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + (enemies[i].scale.x / 2), enemies[i].position.y));
			enemies[i].ENEMY_RIGHT  = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + enemies[i].scale.x, enemies[i].position.y + (enemies[i].scale.y / 2)));
			enemies[i].ENEMY_LEFT   = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x, enemies[i].position.y + (enemies[i].scale.y / 2)));
			enemies[i].ENEMY_BOTTOM = new Collider("enemy", new Vector2(1, 1), new Vector2(enemies[i].position.x + (enemies[i].scale.x / 2), enemies[i].position.y + enemies[i].scale.y));		
			
			if(enemies[i].collider.isTouching(player.trigger))
			{
				if(enemies[i].position.x < player.position.x + 16)
				{
					enemies[i].enemyRandDirect = 2;
				}
				if(enemies[i].position.x > player.position.x - 16)
				{
					enemies[i].enemyRandDirect = 1;
				}
				if(enemies[i].position.x >= player.position.x - 16 && enemies[i].position.x <= player.position.x + 16)
				{
					if(enemies[i].position.y < player.position.y)
					{
						enemies[i].enemyRandDirect = 4;
					}
					if(enemies[i].position.y > player.position.y)
					{
						enemies[i].enemyRandDirect = 3;
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
			if(player.defense > 0)
			{	
				//if(player.collider.isTouching(enemies[i].collider))
				{
					//if(player.collider.isTouching(enemies[i].collider))
					{
						if(player.invulnerabilityTimer <= 0)
						{
							if(FACE_UP.isTouching(enemies[i].collider))
							{
								player.defense -= 1;
								player.position.y += 32;
								player.invulnerabilityTimer = 5;
							}
							if(FACE_BOTTOM.isTouching(enemies[i].collider))
							{
								player.defense -= 1;
								player.position.y -= 32;
								player.invulnerabilityTimer = 5;
							}
							if(FACE_LEFT.isTouching(enemies[i].collider))
							{
								player.defense -= 1;
								player.position.x += 32;
								player.invulnerabilityTimer = 5;
							}
							if(FACE_RIGHT.isTouching(enemies[i].collider))
							{
								player.defense -= 1;
								player.position.x -= 32;
								player.invulnerabilityTimer = 5;
							}
						}
					}
					if(player.invulnerabilityTimer > 0)
					{
						player.invulnerabilityTimer -= deltaTime;
					}
				}
			}
			else
			{
				//if(player.collider.isTouching(enemies[i].collider))
				{
					if(player.invulnerabilityTimer <= 0)
					{
						if(FACE_UP.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.y += 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_BOTTOM.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.y -= 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_LEFT.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.x += 32;
							player.invulnerabilityTimer = 5;
						}
						if(FACE_RIGHT.isTouching(enemies[i].collider))
						{
							player.health -= 1;
							player.position.x -= 32;
							player.invulnerabilityTimer = 5;
						}
					}
					if(player.invulnerabilityTimer > 0)
					{
						player.invulnerabilityTimer -= deltaTime;
					}
				}
			}			
		}
		//player.trigger.draw("#f00");
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
	
		if(enemies[i].health > 0)
		{
			enemies[i].draw();
			enemies[i].healthMeter.draw();
		}
	
	
		if(!sword.isAttacking === true)
		{
			if(attackTime <= 0)
			{
				attackTime -= deltaTime;
			
				
				attackTime = 1;
			}
		}
		else
		{
			
			if(attackTime > 0)
			{
				attackTime -= deltaTime;
				sword.draw();
				if(sword.collider.isTouching(enemies[i].collider))
				{
					console.log(enemies[i].health);
					enemies[i].health -= player.equippedItem * deltaTime * 8;
					enemies[i].position.x += enemies[i].enemySpeedY / 30;
					enemies[i].position.y += enemies[i].enemySpeedX / 30;
					
					if(enemies[i].health <= 0)
					{
						enemies[i].isDead = true;
						enemies[i].collider = new Collider(name, new Vector2(0, 0), new Vector2(0 ,0));
						player.money += Math.floor((enemies[i].level*2) - (enemies[i].level/2));
						enemies.splice(i, 1);
					}
				}
			}
		}
	}
	player.draw(deltaTime, player.sprite);
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
		if(enemies[i].enemyRandDirect === 3 && enemies[i].name === "Slime")
		{
			enemies[i].image = "slime_up.png"
		}
		if(enemies[i].enemyRandDirect === 4 && enemies[i].name === "Slime")
		{
			enemies[i].image = "slime_down.png"
		}
		if(enemies[i].enemyRandDirect === 1 && enemies[i].name === "Slime")
		{
			enemies[i].image = "slime_left.png"
		}
		if(enemies[i].enemyRandDirect === 2 && enemies[i].name === "Slime")
		{
			enemies[i].image = "slime_right.png"
		}
	}
}
