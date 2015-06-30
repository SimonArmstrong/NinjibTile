var Item = function (name, cost, damage, defense)
{
	this.name = name; 
	this.cost = cost;
	this.damage = damage;
	this.defense = defense;
} 

var items = [];

items.push(new Item ("Cloth Rag", 15, 0, 3));
items.push(new Item ("Leather Coat", 22, 0, 6));
items.push(new Item ("Chainmail", 35, 0, 13));
items.push(new Item ("Iron Armour", 50, 0, 25));

items.push(new Item("Cloth Pants", 12, 0, 2));
items.push(new Item("Leather Pants", 20, 0, 4));
items.push(new Item("Chain Pants", 32, 0, 11));
items.push(new Item("Iron Leggings", 45, 0, 20));

items.push(new Item("Cloth Hat", 10, 0, 1));
items.push(new Item("Leather Hat", 18, 0, 3));
items.push(new Item("Chain Helmet", 30, 0, 10));
items.push(new Item("Iron Helmet", 43, 0, 15));

items.push(new Item("Footwraps", 5, 0, 1));
items.push(new Item("Leather Boots", 10, 0, 2));
items.push(new Item("Chain Boots", 20, 0, 7));
items.push(new Item("Iron Boots", 35, 0, 13));

items.push(new Item("Wooden Sword", 20, 5, 0));
items.push(new Item ("Stone Sword", 35, 10, 0));
items.push(new Item("Bronze Sword", 50, 16, 0));
items.push(new Item ("Steel Sword", 100, 25, 0));
items.push(new Item("Developer Sword", 0, 2000, 0));
