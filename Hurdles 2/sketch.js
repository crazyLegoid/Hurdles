var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;
var x_init = 50;

var form, player, game;

var players, player1, player2, player3, player4;

var track;

function preload(){
  track = loadImage("images/track image (1).jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
