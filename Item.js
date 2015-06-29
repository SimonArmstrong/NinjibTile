var Item = function (name, cost, damage, defense)
{
	this.name = name; 
	this.cost = cost;
	this.damage = damage;
	this.defense = defense;
} 

var Shop = function ()
{
	this.Shirt1 = new Item (“Cloth Rag”, 15, 0, 3);
	this.Shirt2 = new Item (“Leather Coat”, 22, 0, 6);
	this.Shirt3 = new Item (“Chainmail”, 35, 0, 13);
	this.Shirt4 = new Item (“Iron Armour”, 50, 0, 25);
	
	this.Pants1 = new Item(“Cloth Pants”, 12, 0, 2);
	this.Pants2 = new Item(“Leather Pants”, 20, 0, 4);
	this.Pants3 = new Item(“Chain Pants”, 32, 0, 11);
	this.Pants4 = new Item(“Iron Leggings”, 45, 0, 20);
	
	this.Helmet1 = new Item(“Cloth Hat”, 10, 0, 1);
	this.Helmet2 = new Item(“Leather Hat”, 18, 0, 3);
	this.Helmet3 = new Item(“Chain Helmet”, 30, 0, 10);
	this.Helmet4 = new Item(“Iron Helmet”, 43, 0, 15);
	
	this.Boots1 = new Item(“Footwraps”, 5, 0, 1);
	this.Boots2 = new Item(“Leather Boots”, 10, 0, 2);
	this.Boots3 = new Item(“Chain Boots”, 20, 0, 7);
	this.Boots4 = new Item(“Iron Boots”, 35, 0, 13);
  
	this.Sword1 = new Item(“Wooden Sword”, 20, 5, 0);
	this.Sword2 = new Item (“Stone Sword”, 35, 10, 0);
	this.Sword3 = new Item(“Bronze Sword”, 50, 16, 0);
	this.Sword4 = new Item (“Steel Sword”, 100, 25, 0);
	this.Sword5 = new Item(“Developer Sword”, 0, 2000, 0);
}