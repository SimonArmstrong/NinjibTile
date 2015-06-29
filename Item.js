var Item = function (name, cost, damage, defense)
{
	this.name = name; 
	this.cost = cost;
	this.damage = damage;
	this.defense = defense;
} 

//Daytabayse
var Shirt1 = new Item (“Cloth Rag”, 15, 0, 3);
var Shirt2 = new Item (“Leather Coat”, 22, 0, 6);
var Shirt3 = new Item (“Chainmail”, 35, 0, 13);
var Shirt4 = new Item (“Iron Armour”, 50, 0, 25);

var Pants1 = new Item(“Cloth Pants”, 12, 0, 2);
var Pants2 = new Item(“Leather Pants”, 20, 0, 4);
var Pants3 = new Item(“Chain Pants”, 32, 0, 11);
var Pants4 = new Item(“Iron Leggings”, 45, 0, 20);
 
var Helmet1 = new Item(“Cloth Hat”, 10, 0, 1);
var Helmet2 = new Item(“Leather Hat”, 18, 0, 3);
var Helmet3 = new Item(“Chain Helmet”, 30, 0, 10);
var Helmet4 = new Item(“Iron Helmet”, 43, 0, 15);

var Boots1 = new Item(“Footwraps”, 5, 0, 1);
var Boots2 = new Item(“Leather Boots”, 10, 0, 2);
var Boots3 = new Item(“Chain Boots”, 20, 0, 7);
var Boots4 = new Item(“Iron Boots”, 35, 0, 13);

//Wheaponz
var Sword1 = new Item(“Wooden Sword”, 20, 5, 0);
var Sword2 = new Item (“Stone Sword”, 35, 10, 0);
var Sword3 = new Item(“Bronze Sword”, 50, 16, 0);
var Sword4 = new Item (“Steel Sword”, 100, 25, 0);
var Sword5 = new Item(“Developer Sword”, 0, 2000, 0);