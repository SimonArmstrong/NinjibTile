


function Music()
{
//musicBackground;
	
	var musicBackground = new Howl({
	urls: ["Legend of Zelda - NES - Dungeon Theme.mp3"],
	loop: true,
	buffer: true,
	volume: 0.5
	} );	
	musicBackground.play();
}