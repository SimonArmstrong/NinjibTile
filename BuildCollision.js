var canMoveRight = true;
var canMoveLeft = true;
var canMoveUp = true;
var canMoveDown = true;

var DOOR = new Collider("door", new Vector2(128, 32), new Vector2(canvas.width / 2 - 64, -32));
var DOOR_DOWN = new Collider("door", new Vector2(128, 32), new Vector2(canvas.width / 2 - 64, canvas.height));

function BuildCollision(deltaTime)
{
	FACE_UP = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + (player.scale.x / 2), player.position.y));
	FACE_RIGHT = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + player.scale.x, player.position.y + (player.scale.y / 2)));
	FACE_LEFT = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x, player.position.y + (player.scale.y / 2)));
	FACE_BOTTOM = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + (player.scale.x / 2), player.position.y + player.scale.y));
	
	if(FACE_UP.isTouching(DOOR) === true)
	{
		player.position.y += (ySpeed + 100) * deltaTime;
		ScrollMap = true;
	}
	else if(FACE_RIGHT.isTouching(DOOR) === true)
	{
		player.position.x -= (-xSpeed + 100) * deltaTime;
		ScrollMap = true;
	}
	else if(FACE_BOTTOM.isTouching(DOOR) === true)
	{
		player.position.y -= (-ySpeed + 100) * deltaTime;
		ScrollMap = true;
	}
	else if(FACE_LEFT.isTouching(DOOR_DOWN) === true)
	{
		player.position.x += (xSpeed + 100) * deltaTime;
		ScrollMap = true;
	}
	else
	{
		//ScrollMap = false;
	}
	
	if(FACE_UP.isTouching(DOOR_DOWN) === true)
	{
		player.position.y += (ySpeed + 100) * deltaTime;
		ScrollMapDown = true;
	}
	if(FACE_RIGHT.isTouching(DOOR_DOWN) === true)
	{
		player.position.x -= (-xSpeed + 100) * deltaTime;
		ScrollMapDown = true;
	}

	if(FACE_BOTTOM.isTouching(DOOR_DOWN) === true)
	{
		player.position.y -= (-ySpeed + 100) * deltaTime;
		ScrollMapDown = true;
	}

	if(FACE_LEFT.isTouching(DOOR_DOWN) === true)
	{
		player.position.x += (xSpeed + 100) * deltaTime;
		ScrollMapDown = true;
	}
	
	for(var i = 0; i <= walls.length - 1; i++)
	{
		if(walls[i].type != "door" && walls[i].type != "door")
		{
			if(FACE_UP.isTouching(walls[i].collider) === true)
			{
				player.position.y += (ySpeed + 100) * deltaTime;
			}
			if(FACE_RIGHT.isTouching(walls[i].collider) === true)
			{
				player.position.x -= (-xSpeed + 100) * deltaTime;
			}

			if(FACE_BOTTOM.isTouching(walls[i].collider) === true)
			{
				player.position.y -= (-ySpeed + 100) * deltaTime;
			}

			if(FACE_LEFT.isTouching(walls[i].collider) === true)
			{
				player.position.x += (xSpeed + 100) * deltaTime;
			}
		}
		else
		{
			if(doorOpen)
			{
				if(FACE_UP.isTouching(walls[i].collider) === true)
				{
					player.position.y += (ySpeed + 100) * deltaTime;
				}
				else if(FACE_RIGHT.isTouching(walls[i].collider) === true)
				{
					player.position.x -= (-xSpeed + 100) * deltaTime;
				}
				else if(FACE_BOTTOM.isTouching(walls[i].collider) === true)
				{
					player.position.y -= (-ySpeed + 100) * deltaTime;
				}
				else if(FACE_LEFT.isTouching(walls[i].collider) === true)
				{
					player.position.x += (xSpeed + 100) * deltaTime;
				}
				else
				{
					doorOpen = false;
				}
			}
		}
	}
	for(var i = 0; i <= walls_c.length - 1; i++)
	{
		if(walls_c[i].type != "door" && walls_c[i].type != "door")
		{
			//Wall Duplicates
			if(FACE_UP.isTouching(walls_c[i].collider) === true)
			{
				player.position.y += (ySpeed + 100) * deltaTime;
			}
			if(FACE_RIGHT.isTouching(walls_c[i].collider) === true)
			{
				player.position.x -= (-xSpeed + 100) * deltaTime;
			}

			if(FACE_BOTTOM.isTouching(walls_c[i].collider) === true)
			{
				player.position.y -= (-ySpeed + 100) * deltaTime;
			}

			if(FACE_LEFT.isTouching(walls_c[i].collider) === true)
			{
				player.position.x += (xSpeed + 100) * deltaTime;
			}
		}
		else
		{
			if(!doorOpen)
			{
				//Wall Duplicates
				if(FACE_UP.isTouching(walls_c[i].collider) === true)
				{
					player.position.y += (ySpeed + 100) * deltaTime;
				}
				if(FACE_RIGHT.isTouching(walls_c[i].collider) === true)
				{
					player.position.x -= (-xSpeed + 100) * deltaTime;
				}

				if(FACE_BOTTOM.isTouching(walls_c[i].collider) === true)
				{
					player.position.y -= (-ySpeed + 100) * deltaTime;
				}

				if(FACE_LEFT.isTouching(walls_c[i].collider) === true)
				{
					player.position.x += (xSpeed + 100) * deltaTime;
				}
			}
		}
	}
}