import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './players.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    const userInput = $("#charType").val();

    let charStatsArray = checkCharType(userInput);
    const [health, attack] = charStatsArray; //deconstructs array
    let character = new Character(health, attack);
    let game = new Game(character);
    
})
})