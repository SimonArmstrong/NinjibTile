var Item = function (name, cost, damage, defense, type, icon)
{
	this.name = name; 
	this.cost = cost;
	this.damage = damage;
	this.defense = defense;
	this.bought = false;
	this.icon = document.createElement("img");
	this.icon.src = icon;
	this.type = type;
} 

var items = [];

items.push(new Item ("Cloth Rag", 15, 0, 1, "Armour", "cloth_rag.png"));
items.push(new Item ("Leather Coat", 22, 0, 2, "Armour", "leather_coat.png"));
items.push(new Item ("Chainmail", 35, 0, 3, "Armour", "chainmail.png"));
items.push(new Item ("Iron Armour", 50, 0, 4, "Armour", "iron_armour.png"));

items.push(new Item("Cloth Pants", 12, 0, 1, "Pants", "placeHolderArmour.png"));
items.push(new Item("Leather Pants", 20, 0, 2, "Pants", "placeHolderArmour.png"));
items.push(new Item("Chain Pants", 32, 0, 3, "Pants", "placeHolderArmour.png"));
items.push(new Item("Iron Leggings", 45, 0, 4, "Pants", "placeHolderArmour.png"));

items.push(new Item("Cloth Hat", 10, 0, 1, "Hat", "placeHolderArmour.png"));
items.push(new Item("Leather Hat", 18, 0, 2, "Hat", "placeHolderArmour.png"));
items.push(new Item("Chain Helmet", 30, 0, 3, "Hat", "placeHolderArmour.png"));
items.push(new Item("Iron Helmet", 43, 0, 4, "Hat", "placeHolderArmour.png"));

items.push(new Item("Footwraps", 5, 0, 1, "Shoes", "placeHolderArmour.png"));
items.push(new Item("Leather Boots", 10, 0, 2, "Shoes", "placeHolderArmour.png"));
items.push(new Item("Chain Boots", 20, 0, 3, "Shoes", "placeHolderArmour.png"));
items.push(new Item("Iron Boots", 35, 0, 4, "Shoes", "placeHolderArmour.png"));

items.push(new Item("Wooden Sword", 0, 1, 0, "Weapon", "woodensword.png"));
items.push(new Item ("Stone Sword", 16, 3, 0, "Weapon", "stonesword.png"));
items.push(new Item("Bronze Sword", 35, 5, 0, "Weapon", "bronzesword.png"));
items.push(new Item ("Steel Sword", 100, 8, 0, "Weapon", "placeHolderWeapon.png"));
items.push(new Item("Developer Sword", 0, 2000, 0, "Weapon", "developersword.png"));

items.push(new Item("buffer", 0, 0, 0, "Null", "nothing.png"));