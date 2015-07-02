var canMoveRight = true;
var canMoveLeft = true;
var canMoveUp = true;
var canMoveDown = true;

var DOOR = new Collider("door", new Vector2(128, 32), new Vector2(canvas.width / 2 - 64, -32));

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
	if(FACE_RIGHT.isTouching(DOOR) === true)
	{
		player.position.x -= (-xSpeed + 100) * deltaTime;
		ScrollMap = true;
	}

	if(FACE_BOTTOM.isTouching(DOOR) === true)
	{
		player.position.y -= (-ySpeed + 100) * deltaTime;
		ScrollMap = true;
	}

	if(FACE_LEFT.isTouching(DOOR) === true)
	{
		player.position.x += (xSpeed + 100) * deltaTime;
		ScrollMap = true;
	}
	
	for(var i = 0; i <= walls.length - 1; i++)
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
}