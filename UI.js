
//Add to the run () function
var UI = function(image)
{
	
//	this.name = "";
//	this.image = image;
	
	this.sprite = document.createElement("img");
	this.image = image;

}

UI.prototype.draw = function()
{
	for(var i = 0; i <= player.health; i++)
	{
		context.drawImage(image, 20 + ((image.width+2)*i), 10);
	}
}
