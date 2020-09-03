import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Character, Game, checkCharType, getRandom, generateEnemy, Enemy } from './players.js';


$(document).ready(function () {
  $("#mageOption").click(function() {
    $("#mageClass").show();
    console.log("T'was clicked!");
  });
  $("#form").submit(function (event) {
    event.preventDefault();
    const userInput = $("#charSelect").val();
    let charStatsArray = checkCharType(userInput);
    const [health, attack] = charStatsArray; //deconstructs array
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