var WALL_TOP_LEFT = new Wall(new Vector2(0, 0), new Vector2(canvas.width / 2 - 64, 32), "WallTestTile.png", "wall");
var WALL_TOP_RIGHT = new Wall(new Vector2(canvas.width / 2 + 64, 0), new Vector2(canvas.width / 2 - 96, 32), "WallTestTile.png", "wall");
var WALL_LEFT = new Wall(new Vector2(0, 0), new Vector2(32, canvas.height - 32), "WallTestTile.png", "wall");
var WALL_RIGHT = new Wall(new Vector2(canvas.width - 32, 0), new Vector2(32, canvas.height), "WallTestTile.png", "wall");
var WALL_BOTTOM = new Wall(new Vector2(0, canvas.height - 32), new Vector2(canvas.width, 32), "WallTestTile.png", "wall");
var WALL_DOOR_TOP = new Wall(new Vector2(canvas.width / 2 - 64, 0), new Vector2(128, 32), "Block.png", "door");
//var WALL_BOTTOM_RIGHT = new Wall(new Vector2(canvas.width / 2 + 64, canvas.height - 32), new Vector2(canvas.width / 2 - 64, 32), "WallTestTile.png", "wall");
//var WALL_DOOR_BOTTOM = new Wall(new Vector2(canvas.width / 2 - 64, canvas.height - 32), new Vector2(128, 32), "Block.png", "door");

var WALL_TOP_LEFT_C = new Wall(new Vector2(0, -canvas.height), new Vector2(canvas.width / 2 - 64, 32), "WallTestTile.png", "wall");
var WALL_TOP_RIGHT_C = new Wall(new Vector2(canvas.width / 2 + 64, -canvas.height), new Vector2(canvas.width / 2 - 96, 32), "WallTestTile.png", "wall");
var WALL_LEFT_C = new Wall(new Vector2(0, -canvas.height), new Vector2(32, canvas.height - 32), "WallTestTile.png", "wall");
var WALL_RIGHT_C = new Wall(new Vector2(canvas.width - 32, -canvas.height), new Vector2(32, canvas.height), "WallTestTile.png", "wall");
var WALL_BOTTOM_LEFT_C = new Wall(new Vector2(0, canvas.height - canvas.height - 32), new Vector2(canvas.width / 2 - 64, 32), "WallTestTile.png", "wall");
var WALL_BOTTOM_RIGHT_C = new Wall(new Vector2(canvas.width / 2 + 64, canvas.height - canvas.height - 32), new Vector2(canvas.width / 2 - 64, 32), "WallTestTile.png", "wall");
var WALL_DOOR_TOP_C = new Wall(new Vector2(canvas.width / 2 - 64, -canvas.height), new Vector2(128, 32), "Block.png", "door");
var WALL_DOOR_BOTTOM_C = new Wall(new Vector2(canvas.width / 2 - 64, canvas.height - canvas.height - 32), new Vector2(128, 32), "Block.png", "door");

var walls = [WALL_TOP_LEFT, WALL_TOP_RIGHT, WALL_BOTTOM, WALL_RIGHT, WALL_LEFT, WALL_DOOR_TOP];
var walls_c = [WALL_TOP_LEFT_C, WALL_TOP_RIGHT_C, WALL_BOTTOM_LEFT_C, WALL_BOTTOM_RIGHT_C, WALL_RIGHT_C, WALL_LEFT_C, WALL_DOOR_TOP_C, WALL_DOOR_BOTTOM_C];

//walls.push();
function BuildWalls(deltaTime)
{	
	for(var i = 0; i <= walls.length - 1; i++)
	{
		if(walls[i].type != "door")
		{
			walls[i].draw();
		}
		else
		{
			if(!doorOpen)
			{
				walls[i].draw();
			}
		}
	}
	
	for(var i = 0; i <= walls_c.length - 1; i++)
	{
		if(walls_c[i].type != "door")
		{
			walls_c[i].draw();
		}
		else
		{
			if(!doorOpen)
			{
				walls_c[i].draw();
			}
		}
	}
}
