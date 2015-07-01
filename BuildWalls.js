var WALL_TOP = new Wall(new Vector2(0, 0), new Vector2(canvas.width - 32, 32), "WallTestTile.png");
var WALL_LEFT = new Wall(new Vector2(0, 0), new Vector2(32, canvas.height - 32), "WallTestTile.png");
var WALL_RIGHT = new Wall(new Vector2(canvas.width - 32, 0), new Vector2(32, canvas.height - 32), "WallTestTile.png");
var WALL_BOTTOM = new Wall(new Vector2(0, canvas.height - 32), new Vector2(canvas.width - 32, 32), "WallTestTile.png");

var walls = [WALL_TOP, WALL_BOTTOM, WALL_RIGHT, WALL_LEFT];
//walls.push();

function BuildWalls()
{	
	WALL_TOP.draw();
	WALL_BOTTOM.draw();
	WALL_LEFT.draw();
	WALL_RIGHT.draw();
}
