
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
	
	var posXDiff = ppx - epx
	var posYDiff = ppy - epy
	
	if(posXDiff > 0)
	{
		if(posYDiff > 0)
		{
			console.log("The player is below and right of the enemy");
			downright = true;	
		}
		if(posYDiff < 0)
		{
			console.log("The player is above and right of the enemy");
			upright = true;
		}

	}
	if(posXDiff < 0)
	{
		if(posYDiff > 0)
		{
			console.log("The player is below and left of the enemy");
			downleft = true;
		}
		if(posYDiff < 0)
		{
			console.log("The player is above and left of the enemy");
			upleft = true;
		}
	}
	
	var positions = [ppx, ppy, epx, epy];
	
	for(var j = 0; j <= positions.length - 1; j++)
	{
		if(positions[j] < 0)
		{	
			position[j] * -1;
		}
	}
	
	if(upleft === true)
	{
		console.log("upleft = true");
		if(posXDiff < posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 1;
		}
		if(posXDiff > posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 3;
		}
	}
	if(upright === true)
	{
		console.log("upright = true");
		if(posXDiff < posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 2;
		}
		if(posXDiff > posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 3;
		}
	}
	if(downleft === true)
	{
		console.log("downleft = true");
		if(posXDiff < posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 2;
		}
		if(posXDiff > posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 4;
		}
	}
	if(downright === true)
	{
		console.log("downright = true")
		if(posXDiff < posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 1;
		}
		if(posXDiff > posYDiff)
		{
			enemies[i].enemyRandDirectDiag = 4;
		}
	}
};