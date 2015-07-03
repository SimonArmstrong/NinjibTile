var HealthMeter = function(enemy)
{
	this.enemy = enemy;
	this.position = new Vector2(this.enemy.position.x, this.enemy.position.y);
	this.staticScale = new Vector2(64, 8);
	this.scale = new Vector2(64, 8);
}

HealthMeter.prototype.draw = function()
{
	this.position = new Vector2(this.enemy.position.x, this.enemy.position.y - 8);
	context.fillStyle = "#000";
	context.fillRect(this.position.x, this.position.y, this.staticScale.x, this.staticScale.y);
	context.fillStyle = "#0f0";
	context.fillRect(this.position.x + 2, this.position.y + 2, ((this.enemy.health / this.enemy.maxHealth) * this.enemy.maxHealth) * 60 / this.enemy.maxHealth, this.scale.y - 4);
}