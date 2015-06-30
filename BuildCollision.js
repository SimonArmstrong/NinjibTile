function BuildCollision()
{
	FACE_UP = new Collider("player", new Vector2(player.scale.x, 1), player.position);
	FACE_DOWN = new Collider("player", new Vector2(player.scale.x, 1), new Vector2(0, player.position.y + player.scale.y));
	FACE_LEFT = new Collider("player", new Vector2(1, player.scale.y), new Vector2(player.position.y + player.scale.y, 0));
	FACE_RIGHT = new Collider("player", new Vector2(1, player.scale.y), new Vector2(player.position.x + player.scale.x, player.position.y));
	
	for(var i = 0; i <= walls.length - 1; i++)
	{
		if(FACE_UP.isTouching(walls[i].collider) === true)
		{
			console.log("UP");
		}
		if(FACE_DOWN.isTouching(walls[i].collider) === true)
		{
			console.log("DOWN");
		}
		if(FACE_LEFT.isTouching(walls[i].collider) === true)
		{
			console.log("LEFT");
		}
		if(FACE_RIGHT.isTouching(walls[i].collider) === true)
		{
			console.log("RIGHT");
		}
	}
}