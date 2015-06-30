var Wall = function(vec_p, vec_s, tile)
{
	this.collider = new Collider("wall", vec_s, vec_p);
	this.tile = document.createElement("img"); 
	this.tileImage = tile;
}

Wall.prototype.draw = function()
{
	this.tile.src = this.tileImage;
	if(this.collider.scale.x > 0)
	{
		for(var x = this.collider.position.x; x <= this.collider.scale.x / 32; x++)
		{
			context.drawImage(this.tile, this.collider.position.x + (32 * x), 0);
		}
	}
	if(this.collider.scale.y > 0)
	{
		for(var y = this.collider.position.y; y <= this.collider.scale.y / 32; y++)
		{
			context.drawImage(this.tile, 0, this.collider.position.y + (32 * y));
		}
	}
}