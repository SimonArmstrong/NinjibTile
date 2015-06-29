var Map = function(level, tilesetImage)
{
	this.layerCount = level.layers.length;
	this.level = level;
	
	this.TILE = level.tileheight;	//The Tile Dimensions on the X and Y
	this.MAP_TILE_WIDTH = level.width;
	this.MAP_TILE_HEIGHT = level.height;
	this.MAP_WIDTH = level.width * this.TILE;
	this.MAP_HEIGHT = level.height * this.TILE;
	this.TILESET_TILE = level.tilesets[0].tileheight;
	this.TILESET_PADDING = level.tilesets[0].margin;
	this.TILESET_SPACING = level.tilesets[0].spacing;
	this.cameraOffset = 0;
	//this.LAYER_SKY = 0;
	//this.LAYER_BACKGROUND_FAR = 1;
	//this.LAYER_BACKGROUND_WALLS = 2;
	this.LAYER_BACKGROUND = 0;
	this.LAYER_PLATFORMS = 4;
	this.LAYER_LADDERS = 5;

	this.tileset = document.createElement("img");
	this.tileset.src = tilesetImage;
};