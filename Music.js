


function Music()
{
//musicBackground;
	
	var musicBackground = new Howl({
	urls: ["Castlevania-II-Simons-Quest-NES-Music-Final-Battle-Last-Boss.mp3"],
	loop: true,
	buffer: true,
	volume: 0.5
	} );	
	musicBackground.play();
}