import { Character } from '../src/js/players.js';
import { Game } from '../src/js/players.js';
import { checkCharType } from '../src/js/players.js';

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
});

describe('Game', () => {

  test('should create a game object with a character', () => {
    let character = new Character(10, 3);
    const game = new Game(character);
    expect(game.character.health).toEqual(10);
    expect(game.character.attack).toEqual(3);
    expect(game.character.experience).toEqual(0);
  })
})
