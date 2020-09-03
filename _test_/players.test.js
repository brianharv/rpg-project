import { Character, Game, checkCharType, generateEnemy, getRandom } from '../src/js/players.js';

describe('Character', () => {

  test('should correctly create a new character object', () => {
    const character = new Character(10, 3)
    expect(character.health).toEqual(10);
    expect(character.attack).toEqual(3);
  });
});

describe('checkCharType', () => {

  test('should correctly return an array of character stats', () => {
    expect(checkCharType("mage")).toEqual([10, 3]);
  });
})


describe('Game', () => {

  test('should create a game object with a character', () => {
    let character = new Character(10, 3);
    const game = new Game(character);
    expect(game.character.health).toEqual(10);
    expect(game.character.attack).toEqual(3);
    expect(game.character.experience).toEqual(0);
  })
})

describe('generateEnemy', () => {

  test('should create an enemy object', () => {

    expect(generateEnemy(1)).toEqual(["Wolf", 10, 3, 0]);
    expect(generateEnemy(2)).toEqual(["Goblin", 9, 2, 0]);
  })
})

describe('getRandom', () => {
  test('should generate random number within parameters', () => {
    expect(getRandom()).toBeGreaterThanOrEqual(1);
    expect(getRandom()).toBeLessThanOrEqual(3);
  })
})

//Test Below Tests if new instance of game object is created
describe('Game', () => {
  test('should generate character and enemy into new game', () => {
    expect(new Game()).toBeInstanceOf(Game);
  })
})

//Test below tests that character and enemy are objects within the game object
describe('game', () => {
  test('should generate character and enemy into new game', () => {
    let character = {health: 10, attack: 3, experience: 0}
    let enemy = {enemyName: "Goblin", enemyHealth: 9, enemyAttack: 2, enemyExperience: 0}
    let game = new Game(character, enemy);
    expect(game.character).toEqual({health: 10, attack: 3, experience: 0});
    expect(game.enemy).toEqual({enemyName: "Goblin", enemyHealth: 9, enemyAttack: 2, enemyExperience: 0});
  })
})

// describe('Game', () => {
//   test('should generate character and enemy into new game', () => {
//     let enemy;
//     let character = new Character();
//     let game = new Game(character, enemy);
//     expect(game.character).toEqual(character);
//   })
// })