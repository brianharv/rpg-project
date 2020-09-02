import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Character, Game, checkCharType } from './players.js';

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const userInput = $("#charSelect").val();

    let charStatsArray = checkCharType(userInput);
    const [health, attack] = charStatsArray; //deconstructs array
    let character = new Character(health, attack);
    console.log(character);
    //let enemy = new Enemy();

    let game = new Game(character);
    console.log(game);
  });
});