var Wall = function(vec_p, vec_s, tile)
{
	this.collider = new Collider("wall", vec_s, vec_p);
	this.tile = document.createElement("img"); 
	this.tileImage = tile;
}

Wall.prototype.draw = function()
{
	this.tile.src = tileImage;
	for(var x = this.collider.position.x; x <= this.collider.scale.x / 32; x++)
	{
		context.drawImage(tile, this.collider.position.x + (32 * i), 0);
	}
	
	for(var y = this.collider.position.y; y <= this.collider.scale.y / 32; y++)
	{
		context.drawImage(tile, 0, this.collider.position.y + (32 * i));
	}
}