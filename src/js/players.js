export class Game {
  constructor(character) {
    this.character = character;
    //this.enemy = enemy
  }
}
export class Character {
  constructor(health, attack) {
    this.health = health,
      this.attack = attack,
      this.experience = 0
  }
}

// export class Enemy {
//   constructor(enemy) {
//     this.enemy = enemy
//   }
// }

export function getRandom() {
   //return Math.floor(Math.random() * 3) + 1;
 }

export function generateEnemy(randNum) {
  let enemy1 = ["Wolf", 10, 3, 0];
  let enemy2 = ["Goblin", 9, 2, 0];
  if (randNum === 1) {
    return enemy1;
  }
  else if (randNum === 2) {
    return enemy2;
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