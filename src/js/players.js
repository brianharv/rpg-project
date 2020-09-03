export class Game {
  constructor(character, enemy) {
    this.character = character,
      this.enemy = enemy
  }

  turnFunction() {
    if (this.character.status === true) {
      this.character.status = false;
      this.enemy.status = true;
    }
    else {
      this.character.status = true;
      this.enemy.status = false;
    }
  }
}

export class Character {
  constructor(health, attack) {
    this.health = health,
      this.attack = attack,
      this.experience = 0
    this.status = true;
  }
}
export class Enemy {
  constructor(enemyName, enemyHealth, enemyAttack, enemyExperience) {
    this.enemyName = enemyName,
      this.enemyHealth = enemyHealth,
      this.enemyAttack = enemyAttack,
      this.enemyExperience = enemyExperience,
      this.status = false
  }
}

export function getRandom() {
  return Math.floor(Math.random() * 3) + 1;
}

export function generateEnemy(randNum) {
  let enemy1 = ["Wolf", 10, 3, 0];
  let enemy2 = ["Goblin", 9, 2, 0];
  let enemy3 = ["Wizard", 8, 1, 0];
  if (randNum === 1) {
    return enemy1;
  }
  else if (randNum === 2) {
    return enemy2;
  }
  else if (randNum === 3); {
    return enemy3;
  }
}

// let player= new Player();
export function checkCharType(userInput) {
  let charStats;
  if (userInput === "mage") {
    charStats = [10, 3];
  }
  else if (userInput === "paladin") {
    charStats = [15, 2];
  }
  return charStats;
}