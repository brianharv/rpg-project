import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Character, Game, checkCharType, getRandom, generateEnemy, Enemy } from './players.js';


$(document).ready(function () {
  let userInput;
  let charStatsArray;
  $("#magePic").click(function () {
    //$("#mageClass").show();
    console.log("T'was clicked!");
    userInput = "mage"
  });
  $("#palPic").click(function () {
    //$("#mageClass").show();
    console.log("T'was clicked!");
    userInput = "paladin"
  });

  $("#startGame").click(function () {
    console.log("Start game was clicked");
    if (userInput === "mage" || userInput === "paladin") {
      charStatsArray = checkCharType(userInput);
    }
    else {
      alert("Please Select a Character!");
      return false;
    }
    const [health, attack] = charStatsArray //deconstructs array
    let character = new Character(health, attack);
    console.log(character);
    let randNum = getRandom();
    let enemyStatsArray = generateEnemy(randNum);
    const [enemyName, enemyHealth, enemyAttack, enemyExperience] = enemyStatsArray;
    let enemy = new Enemy(enemyName, enemyHealth, enemyAttack, enemyExperience);
    console.log(enemy);
    let game = new Game(character, enemy);
    console.log(game);
  });
});