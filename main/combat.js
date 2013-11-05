function Weapon(name, effect, special){
  this.name = name;
  this.eff = effect;
  this.spc = special;
  this.Equip = function(inventory, owner){
    inventory.push(this);
    owner.att += this.eff;
  }
  }
function Special(name, effect){
  this.name = name;
  this.eff = effect;
  /*
    Possible Specials:
      Multiply = function(weapon){
        weapon.eff *= Math.round(Math.random()*7+1);
      }
      Weaken = function(enemy){
        enemy.att -= Math.round(Math.random()*10+1);
        enemy.def -= Math.round(Math.random()*10+1);
        enemy.spd -= Math.round(Math.random()*2);
        enemy.hp -= Math.round(Math.random()*35+10);
        enemy.stomach -= Math.round(Math.random()*25+5);
      }
  */
}
function Shield(name, effect){
  this.name = name;
  this.eff = effect;
  this.Equip = function(inventory, owner){
    inventory.push(this);
    owner.def += this.eff;
  }
}
var weaken = new Special("Weaken");
weaken.eff = function(enemy){
  enemy.att -= Math.round(Math.random()*10+1);
  enemy.def -= Math.round(Math.random()*10+1);
  enemy.spd -= Math.round(Math.random()*2);
  enemy.hp -= Math.round(Math.random()*35+10);
}
var multi = new Special("Multiply");
multi.eff = function(weapon){
  weapon.eff *= Math.round(Math.random()*6+1);
}