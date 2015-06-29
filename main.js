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
	if(e.keyCode == KEY_W || e.keyCode == KEY_UP )
	{
		ySpeed = player.speed;
	}	
	if(e.keyCode == KEY_S || e.keyCode == KEY_DOWN )
	{
		ySpeed = -player.speed;
	}
	if(e.keyCode == KEY_A || e.keyCode == KEY_LEFT )
	{
		xSpeed = player.speed;
	}
	if(e.keyCode == KEY_D || e.keyCode == KEY_RIGHT )
	{
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
	
	context.fillStyle = "#fff";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
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

