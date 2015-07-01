var mapImage = document.createElement("img");
mapImage.src = "mapDungeon.png";

function BuildMap()
{
	context.drawImage(mapImage, 0, 0);
}