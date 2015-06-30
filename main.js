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
var Rat = new Enemy ("Rat", 1, "test_enemy.png");

var mapImage = document.createElement("img");
mapImage.src = "mapDay.png";

//var ui = new UI("notHeart.png");

var xSpeed = 0;
var ySpeed = 0;

var KEY_SPACE = false;
var KEY_UP = false;
var KEY_DOWN = false;
var KEY_LEFT = false;
var KEY_RIGHT = false;

var KEY_W = false;
var KEY_A = false;
var KEY_S = false;
var KEY_D = false;
var KEY_SHIFT = false;

function KeyDown(e)
{
	if(e.keyCode == 87 || e.keyCode == 38 )
	{
		KEY_W = true;
		KEY_UP = true;
		KEY_UP = 38;
		KEY_W = 87;
		ySpeed = player.speed;
	}	
	if(e.keyCode == 83 || e.keyCode == 40 )
	{
		KEY_S = true;
		KEY_DOWN = true;
		KEY_DOWN = 40;
		KEY_S = 83;
		ySpeed = -player.speed;
	}
	if(e.keyCode == 65 || e.keyCode == 37 )
	{
		KEY_A = true;
		KEY_LEFT = true;
		KEY_LEFT = 37;
		KEY_A = 65;
		xSpeed = player.speed;
	}
	if(e.keyCode == 68 || e.keyCode == 39 )
	{
		KEY_D = true;
		KEY_RIGHT = true;
		KEY_RIGHT = 39;
		KEY_D = 68;
		xSpeed = -player.speed;
	}
}
window.addEventListener('keydown', KeyDown);

function KeyUp(e)
{
	if(e.keyCode == KEY_W || e.keyCode == KEY_UP )
	{
		ySpeed = 0;
	}	
	if(e.keyCode == KEY_S || e.keyCode == KEY_DOWN )
	{
		ySpeed = 0;
	}
	if(e.keyCode == KEY_A || e.keyCode == KEY_LEFT )
	{
		xSpeed = 0;
	}
	if(e.keyCode == KEY_D || e.keyCode == KEY_RIGHT )
	{
		xSpeed = 0;
	}
}
window.addEventListener('keyup', KeyUp);

function run()
{
	var deltaTime = getDeltaTime();
	
	player.position.y -= ySpeed * deltaTime;
	player.position.x -= xSpeed * deltaTime;
	
	if(player.collider.isTouching(new Collider("Wall", new Vector2(32, canvas.height), new Vector2(canvas.width - 32, 0))) === true)
	{
		console.log("bruh");
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

