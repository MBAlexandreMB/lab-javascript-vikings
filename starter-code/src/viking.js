// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

  checkDeath() {
    if(this.health > 0) {
      false;
    } else {
      return true;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (!this.checkDeath()) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (!this.checkDeath()) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomV = Math.floor(Math.random() * this.vikingArmy.length);
    const randomS = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomS];
    const saxonAttack = randomSaxon.receiveDamage(this.vikingArmy[randomV].attack());
    if (randomSaxon.checkDeath()) {
      this.saxonArmy.splice(randomS, 1);
    }
    return saxonAttack;
  }

  saxonAttack() {
    const randomV = Math.floor(Math.random() * this.vikingArmy.length);
    const randomS = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = this.vikingArmy[randomV];
    const vikingAttack = randomViking.receiveDamage(this.saxonArmy[randomS].attack());
    if (randomViking.checkDeath()) {
      this.vikingArmy.splice(randomV, 1);
    }
    return vikingAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
