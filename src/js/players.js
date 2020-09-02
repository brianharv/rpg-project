export class Game {
  constructor(character) {
    this.character = character;
  }
}



export class Character {
  constructor(health, attack) {
    this.health = health,
      this.attack = attack,
      this.experience = 0

  }
};

// let player= new Player();
export function checkCharType(userInput) {
  let charStats;
  if (userInput === "mage") {
    charStats = [10, 3]
  }
  else if (userInput === "paladin") {
    charStats = [15, 2]
  }
  return charStats;
}