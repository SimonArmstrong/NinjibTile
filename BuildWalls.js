var WALL_TOP = new Wall(new Vector2(0, 0), new Vector2(800 - 32, 0), "WallTestTile.png");
var WALL_LEFT = new Wall(new Vector2(0, 0), new Vector2(0, 480), "WallTestTile.png");
var WALL_RIGHT = new Wall(new Vector2(800 - 32, 0), new Vector2(0, 480), "WallTestTile.png");
var WALL_BOTTOM = new Wall(new Vector2(0, 480 - 32), new Vector2(800 - 32, 0), "WallTestTile.png");

function BuildWalls()
{	
	WALL_TOP.draw();
	WALL_BOTTOM.draw();
	WALL_LEFT.draw();
	WALL_RIGHT.draw();
}