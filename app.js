
function Game() {
  // number of moves needed to win
  this.numOfMoves = 20;
  //New instance of player one and two
  this.playerOne = new Player(1);
  this.playerTwo = new Player(2);

}

// A starter Player constructor.
function Player(id) {
  this.id = id
  this.count = 0; 
  this.moves = 20;
  
};


Game.prototype.init = function() {
  alert("Get ready because there is a Kitty killing everyone in space!!! You need to fly your Space Ship really fast to avoid getting eaten!! Are you ready??");

  var playerOneName = prompt("What is Player Ones Name? To move your ship press the SPACEBAR key repeatedly as fast as you can!!")
  var playerTwoName = prompt("What is Player Twos Name? To move your ship press the ENTER key repeatedly as fast as you can!!")
  var _this = this;
  var startTimer = true
  var finishTime = true
  var spaceBar = 32
  var enter = 13
  $(document).keyup(function(e) {
        
        if (((_this.playerOne.count === 0) || (_this.playerTwo.count === _this.numOfMoves)) && (startTimer === true)) {
          timeOne = (new Date ($.now()))
            timerId = window.setInterval(function() {
              var $clock = $("#total-time").text((($.now()) - timeOne )/1000 ) 
            })
            startTimer = false

        } else if (((_this.playerOne.count === _this.numOfMoves) || (_this.playerTwo.count === _this.numOfMoves)) && (finishTime === true)) {
       
          timeTwo= ($.now())
          $("#total-time").text((timeTwo - timeOne)/1000)
          $('.winner').after("<div class='timeColor'> The Winning Time Is " + ((timeTwo - timeOne)/1000) + " Seconds </div>")
          stopTimer = true;
          $('.timer').remove()
          finishTime = false
        }
          
        if ((e.which == spaceBar) && (_this.playerOne.count < _this.numOfMoves)) {  
          _this.playerOne.move()    
        } else if ((e.which == enter) && (_this.playerTwo.count < _this.numOfMoves)) {
          _this.playerTwo.move();    
        }; 

        window.setInterval(function(){
            $('.planet1').animate({"right": "+=10px"}, 'slow')
          }, 20)
        window.setInterval(function(){
            $('.planet2').animate({"right": "+=10px"}, 'fast')
          }, 20)
    
        window.setInterval(function(){
            $('.catPicture').animate({"left": "+=5px"}, 'fast')
          }, 20)
   
});
}

Game.prototype.reset = function () {
  if ((_this.playerOne.count === _this.numOfMoves) || (_this.playerTwo.count === _this.numOfMoves)) {
    console.log("hello")
  }


}

// Remember: prototypes are shared functions between all game instances

Player.prototype.move = function() {
  
  if (this.id === 1) {
    $('.rocketShipOne').animate({"left": "+=20px"}, "fast"); 
  } else if (this.id === 2){
    $('.rocketShipTwo').animate({"left": "+=20px"}, "fast");
  }  
   this.count++;
   var stopSpinning = 0;

   if ((this.count === this.moves) && (this.id === 1) && (stopSpinning === 0)) {
      $(".rocketShipTwo").animate({ transform: 1440, 'width': '5px', 'height': '2px'},  
            { duration: 700, step: function(now, fx) {  
                    if (fx.prop == "transform") {  
                        if (now > 360) { $(this).css({  
                                '-webkit-transform': 'rotate(' + now + 'deg)',  
                                '-moz-transform': 'rotate(' + now + 'deg)',     
                                '-ms-transform': 'rotate(' + now + 'deg)',      
                                '-o-transform': 'rotate(' + now + 'deg)',       
                                'transform': 'rotate(' + now + 'deg)',          
                                'opacity': now / 1440  
                            })  
                        }  
                    }  
                }  
            });  
      stopSpinning = stopSpinning + 1

    } else if ((this.count === this.moves) && (this.id === 2) && (stopSpinning === 0)) {

      $(".rocketShipOne").animate({ transform: 1440, 'width': '5px', 'height': '2px'},  
            { duration: 700, step: function(now, fx) {  
                    if (fx.prop == "transform") {  
                        if (now > 360) { $(this).css({  
                                '-webkit-transform': 'rotate(' + now + 'deg)',  
                                '-moz-transform': 'rotate(' + now + 'deg)',     
                                '-ms-transform': 'rotate(' + now + 'deg)',      
                                '-o-transform': 'rotate(' + now + 'deg)',       
                                'transform': 'rotate(' + now + 'deg)',          
                                'opacity': now / 1440  
                            })  
                        }  
                    }  
                }  
            });
      stopSpinning = stopSpinning + 1
    } 
  
   
 };

$(document).ready(function(){
var game = new Game();
game.init();
})
