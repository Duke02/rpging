function Char(name, attack, defense, speed, type, health, experience, inventory, stomach, stamina, relation, bank,moveA,moveB){
 
  this.name = name;
  this.att = attack;
  this.def = defense;
  this.spd = speed;
  this.type = type;
  this.hp = health;
  this.xp = experience;
  this.inv = inventory;
  this.stm = stomach;
  this.stam = stamina;
  this.rlt = relation;
  this.bank = bank;
  this.mA = moveA;
  this.mB = moveB;
  this.Attack = function(move, enemy, weapon){
    var dmg = dmg*(this.att/2-2)+1+weapon.eff;
    dmg = Math.round(dmg);
    enemy.hp -= dmg;
    move.Use(this);
  }
  this.Gather = function(){
    var it = Math.round(Math.random()*ite.length);
    this.inventory.push(ite[it]);
  }
  this.Eat = function(food){
    hunger += food.eff;
  }
  this.Regen = function(){
    if(hunger >= 80) this.hp += 5;
    if(hunger >= 60) this.hp += 2;
    if(hunger >= 45) this.hp += 1;
    if(hunger <= 25) this.hp -= 3;
  }
  this.LvlUp = function(){
    for(var i = 0; i <= levels.length; i++){
      if(this.exp >= levels[i]){
        var hi = Math.round(Math.random()*4);
        var blah = Math.round(Math.random()*4);
        var la = Math.round(Math.random()*35+5);
        this.att += hi;
        this.def += blah;
        this.hp += la;
      }
    }
  }
  this.DrinkP = function(potion){
    this.att += poition.eff;
    this.def += potion.eff;
    this.hp += potion.eff * 2 + 3;
    this.xp += Math.round(potion.eff/2);
  }
  this.Promote = function(){
    for(var i = 0; i<=this.type.tree.length; i++){
      if(this.type.tree[i]===this.type){
        this.type = this.type.tree[i];
        i += this.type.tree.length + 20;
      }
    }
  }
  this.Rename = function(name){
    this.name = name;
  }
  this.Greet = function(character, relationship){
    if(relationship == "hostile") foes.push(character);
    if(relationship == "nuetral") nuetrals.push(character);
    if(relationship == "friendly") friends.push(character);
    }
  this.CUpgrade = function(){
    this.Promote();
    this.att += this.type.attA;
    this.def += this.type.defA;
    this.spd += this.type.spdA;
  }