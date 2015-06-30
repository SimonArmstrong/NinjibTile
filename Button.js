var Button = function(text, vec_p)
{
	this.text = text;
	this.item = 0;
	this.size = new Vector2(64, 64);
	this.position = new Vector2 (0, 0);
}

Button.prototype.draw = function()
{
	context.fillStyle = "#000";
	context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
	context.fillStyle = "#fff";
	context.fillText(this.text, this.position.x, this.position.y, this.size.x, this.size.y);
}