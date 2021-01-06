;
    

    var grid = [
        ['T','C','F','R','K','F','C','T'],
        ['P','P','P','P','P','P','P','P'],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        ['p','p','p','p','p','p','p','p'],
        ['t','c','f','k','r','f','c','t'] ];
      
      console.log(grid.join('\n') + '\n\n');
      grid[4][4] = grid[6][4];
      grid[6][4] = ' ';
      console.log(grid.join('\n'));



    this.advance = function()
    {
        var nextPosition = this.body[0].slice();
        switch(this.direction){
            case "left":
                nextPosition[0] -= 1;
                break;
            case "right":
                nextPosition[0] += 1;
                break;
            case "down":
                nextPosition[1] += 1;
                break;
            case "up":
                nextPosition[1] -= 1;
                break;  
            default:
                throw("invalid direction");      
                       
        }
        this.body.unshift(nextPosition);
        this.body.pop();

    };


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
 
