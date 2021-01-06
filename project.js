
    

    var grid = [
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    ];
      
      console.log(grid.join('\n') + '\n\n');
      grid[4][4] = grid[6][4];
      grid[6][4] = ' ';
      console.log(grid.join('\n'));

    

var x = grid.map(function /*component*/(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }


function updateGameArea() {
  myGameArea.clear();
  myGamePiece.newPos();
  myGamePiece.update();
}
function moveup() {
  myGamePiece.speedY -= 1;
} 

function movedown() {
  myGamePiece.speedY += 1;
}


 function moveleft() {
  myGamePiece.speedX -= 1;
}


 function moveright() {
  myGamePiece.speedX += 1;
}

});
console.log(x);




 function roverKeyDown() {

        var newDirection;
        switch(grid){
            case 37:
                newDirection = "N";
                break;
            case 38:
                newDirection = "N";
                break;
            case 39:
                newDirection = "E";
                break;
            case 40:
                newDirection = "W";
                break; 
            default:
                return;   

                                  
        } 
    }
 
