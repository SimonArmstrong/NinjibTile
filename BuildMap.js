var mapImage = document.createElement("img");
mapImage.src = "mapDungeon.png";

var ScrollMap = false;

function BuildMap()
{
	context.drawImage(mapImage, 0, 0);
}