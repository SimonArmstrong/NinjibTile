var BaseState = function()
{
	this.states = [];
}

BaseState.prototype.load(state)
{
	this.states.push(state);
}