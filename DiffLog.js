
var DiffLog = function(i)
{		
	var ppx = player.position.x;
	var ppy = player.position.y;
	var epx = enemies[i].position.x;
	var epy = enemies[i].position.y;
	
	var upleft = false;
	var upright = false;
	var downleft = false;
	var downright = false;


	/*
	var positions = [ppx, ppy, epx, epy];

	for(var j = 0; j <= positions.length - 1; j++)
	{
		if(positions[j] < 0)
	}
	*/
	
	var posXDiff = ppx - epx
	var posYDiff = ppy - epy
	

	if(posXDiff > 0)
	{
		if(posYDiff > 0)
		{
			console.log("The enemy is above and left of the player");
		}
		if(posYDiff < 0)
		{
			console.log("The enemy is below and left of the player");
		}

	}
	if(posXDiff < 0)
	{
		if(posYDiff > 0)
		{
			console.log("The player is below and left of the enemy");
		}
		if(posYDiff < 0)
		{
			console.log("The player is above and left of the enemy");
		}
	}
};