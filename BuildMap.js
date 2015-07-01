var mapImage = document.createElement("img");
mapImage.src = "mapDay.png";

function BuildMap()
{
	//context.drawImage(mapImage, 0, 0);
	context.fillStyle = "#000";
	context.fillRect(0, 0, canvas.width, canvas.height);
}