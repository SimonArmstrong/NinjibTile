var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//-------------------- Don't modify anything above here-----------------------------------------------------------------------------------------------

var player = new Player("test_player.png");
var Rat = new Enemy ("Rat", 1, "Rat_Image.png");

var mapImage = document.createElement("img");
mapImage.src = "mapDay.png";

//var ui = new UI("notHeart.png");

var xSpeed = 0;
var ySpeed = 0;

var KEY_SPACE = 32;
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_LEFT = 37;
var KEY_RIGHT = 39;

var KEY_W = 87;
var KEY_A = 65;
var KEY_S = 83;
var KEY_D = 68;
var KEY_SHIFT = 16;

function KeyDown(e)
{
	switch(e.keyCode)
	{
		//Up movement
		case KEY_W || KEY_UP:
			ySpeed = player.speed;
			xSpeed = 0; 
			player.direction = 1;
		break;
		//Down movement
		case KEY_S || KEY_DOWN:
			ySpeed = -player.speed;
			xSpeed = 0; 
			player.direction = 2;
		break;
		//Left movement
		case KEY_A || KEY_LEFT:
			xSpeed = player.speed;
			ySpeed = 0;
			player.direction = 3;
		break;
		//Right movement
		case KEY_D || KEY_RIGHT:
			xSpeed = -player.speed;
			ySpeed = 0;
			player.direction = 4;
		break;
	}
}
window.addEventListener('keydown', KeyDown);

function KeyUp(e)
{		
	switch(e.keyCode)
	{
		//Up stopping
		case KEY_W || KEY_UP:
			ySpeed = 0; 
		break;
		//Down stopping
		case KEY_S || KEY_DOWN:
			ySpeed = 0; 
		break;
		//Left stopping
		case KEY_A || KEY_LEFT:
			xSpeed = 0;
		break;
		//Right Stopping
		case KEY_D || KEY_RIGHT:
			xSpeed = 0;
		break;
	}
}
window.addEventListener('keyup', KeyUp);

var FACE_UP;
var FACE_DOWN;
var FACE_LEFT;
var FACE_RIGHT;


function run()
{
	var deltaTime = getDeltaTime();
	
	player.position.y -= ySpeed * deltaTime;
	player.position.x -= xSpeed * deltaTime;
	
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
	
	context.drawImage(mapImage, 0, 0);
	
	context.fillStyle = "#000";
	context.fillRect(canvas.width - 32, 0, 32, canvas.height);
	
	Rat.draw();
	player.draw();
	
	
	
	//map.drawMap(0, 0);
	//UI.draw();
}

//-------------------- Don't modify anything below here --------------------------------------------------------------------------------------------


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);

