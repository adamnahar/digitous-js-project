
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
    

  /*
  rover est un object qui contient des clés direction qui prendre la valeur N par défaut represént la direction vers le nord et W, E, S,
  y represént l'horizontal et x represént le vertical.

  */

var rover = {
  direction: "N",
  x:0,
  y:0
};

//turnRight c'est une function faire l'action de la direction a droite
function turnRight(rover){
  if (rover.direction === "N"){
      rover.direction = "E";
  }else if(rover.direction ==="E"){
      rover.direction = "S";
  }else if(rover.direction ==="S"){
      rover.direction ="W";
  }else if(rover.direction ==="W"){
      rover.direction = "S";
  }
  console.log("rover dans turnRight :", rover.direction);
}
turnRight(rover);
turnRight(rover);
turnRight(rover);
turnRight(rover);


//turnLeft c'est une function faire l'action de la direction a gauche.


function turnLeft(rover){
  if (rover.direction === "N"){
      rover.direction = "W";
  }else if(rover.direction ==="W"){
      rover.direction = "S";
  }else if(rover.direction ==="S"){
      rover.direction ="E";
  }else if(rover.direction ==="E"){
      rover.direction = "N";
  }
  console.log("rover dans turnLeft :",rover.direction);
}

turnLeft(rover);
turnLeft(rover);
turnLeft(rover);
turnLeft(rover);
console.log(rover.direction);


//moveforWard c'est une function faire changemment de la position vertical et horizontal.

// function moveForWard(rover) {
//   // console.log(rover.direction);
//   if(rover.direction === "N"){
//       rover.y = rover.y+1
//   }
//  else if(rover.direction ==="E"){
//      rover.x = rover.x+1
//  }
//  else if (rover.direction ==="S"){
//      rover.y = rover.y+1
//  }
//  else if (rover.direction === "W"){
//      rover.x = rover.x+1
//  }
//  console.log(rover.x);
//  console.log(rover.y);

// }
// console.log(moveForWard());

function moveForWard(rover){
  if(rover.direction === "N"){
    rover.y = rover.y +1;
  }else if(rover.direction === "E"){
    rover.x = rover.x +1;
  }else if(rover.direction === "S"){
    rover.x = rover.x +1;
  }else if(rover.direction === "W"){
    rover.x = rover.y +1;
  }console.log(moveForWard());
}
console.log(`${rover.x} / ${rover.y}`);
console.log(`${rover.x} / ${rover.y}`);
console.log(`${rover.x} / ${rover.y}`);
console.log(`${rover.x} / ${rover.y}`);





