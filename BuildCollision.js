var canMoveRight = true;
var canMoveLeft = true;
var canMoveUp = true;
var canMoveDown = true;

function BuildCollision(deltaTime)
{
	FACE_UP = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + (player.scale.x / 2), player.position.y));
	FACE_RIGHT = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + player.scale.x, player.position.y + (player.scale.y / 2)));
	FACE_LEFT = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x, player.position.y + (player.scale.y / 2)));
	FACE_BOTTOM = new Collider("player", new Vector2(1, 1), new Vector2(player.position.x + (player.scale.x / 2), player.position.y + player.scale.y));
	
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