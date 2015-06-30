function BuildCollision()
{
	FACE_UP = new Collider("player", new Vector2(player.scale.x, 1), player.position);
	FACE_DOWN = new Collider("player", new Vector2(player.scale.x, 1), new Vector2(0, player.position.y + player.scale.y));
	FACE_LEFT = new Collider("player", new Vector2(1, player.scale.y), new Vector2(player.position.y + player.scale.y, 0));
	FACE_RIGHT = new Collider("player", new Vector2(1, player.scale.y), new Vector2(player.position.x + player.scale.x, player.position.y));
	
	if(FACE_UP.isTouching(new Collider("Wall", new Vector2(32, canvas.height), new Vector2(canvas.width - 32, 0))) === true)
	{
		console.log("UP");
	}
	if(FACE_DOWN.isTouching(new Collider("Wall", new Vector2(32, canvas.height), new Vector2(canvas.width - 32, 0))) === true)
	{
		console.log("DOWN");
	}
	if(FACE_LEFT.isTouching(new Collider("Wall", new Vector2(32, canvas.height), new Vector2(canvas.width - 32, 0))) === true)
	{
		console.log("LEFT");
	}
	if(FACE_RIGHT.isTouching(new Collider("Wall", new Vector2(32, canvas.height), new Vector2(canvas.width - 32, 0))) === true)
	{
		console.log("RIGHT");
	}
}