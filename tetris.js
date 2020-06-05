
const cvs = document.getElementById("tetris");
const cvs = document.getElementById("tetris");//canvas z html
const ctx = cvs.getContext("2d"); //contex-<ctx

ctx.fillRect(0,0, canvas.width, canvas.height);

const ROW=20;
const COLUMN=10;
const backgroundcolor="#222";

const ROW=20;   //klasyczny tetris wymiary 
const COLUMN=10; //pamiętając że canvas 200 x 400
const SQ=squareSize=20;  //daje nam kwadrat 20x20

//rysuj kwadrat.....................................................................................................
function drawSquare(x,y,color){//{nr of SQ from the left,right,color) SQ=20px X 20px
	ctx.fillStyle=color;
	ctx.fillRect(x*SQ,y*SQ,SQ,SQ); //(ile od brzegulewego, ile od brzegu górnego, width,height)
	
	ctx.strokeStyle="WHITE"; //obramowanie
	ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

let board=[];
//tablica utwórz...........................................................................................................
let board=[];//CREATE the board
for (r=0;r<ROW;r++){
  board[r]=[];
  for(c=0; c<COLUMN;c++){
    board[r][c]="white"
    board[r][c]=backgroundcolor;
  }
}
function drawBoard(){
}//rysuj tablicę
function drawBoard(){//draw
  for(r=0;r<ROW;r++){
    for(c=0;c<COL;c++){
      drawSquare(c,r,board[r][c]);
 function drawBoard(){
  }
}
  drawBoard();

  
//.............................................................................................................................
 /* 
const z =[
  [[1,1,0], //z=[0]
  [0,1,1],
 const z =[
  [0,1,1],
  [0,1,0]],
          
  [[0,0,0],
  [[0,0,0], //z[2] etc
  [1,1,0],
  [0,1,1]],
  
const z =[
  [1,1,0],
  [1,0,0]] 
];

let piece=z[0];
*/
//draw the tetrominoes ............................................................................................
/*  let piece=z[0];     //rysowanie w macierzy 1=kolor 0 nie
const pieceColor="orange";

for(r=0;r<piece.length;r++){
  for(c=0;c<piece.length;c++){
    if(piece[r][c]){
 for(r=0;r<piece.length;r++){
    }
  }
};
let piece=new Piece(z,"blue");*/
function Piece(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    
    // we need to control the pieces, default place before start, top of board
    this.x = 3;
    this.y = -2;
}

// fill function......................................?????????

Piece.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we draw only occupied squares
            if( this.activeTetromino[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}

// draw a piece to the board.............................................................................................................
Piece.prototype.draw = function(){ //składnia funkcji:  Piece.prototype.draw = function(){     
    this.fill(this.color);							//for( r = 0; r < this.activeTetromino.length; r++){
}															   //for(c = 0; c < this.activeTetromino.length; c++){
// undraw a piece									     // if( this.activeTetromino[r][c]){
Piece.prototype.unDraw = function(){    //drawSquare(this.x + c,this.y + r, this.color);}}}}
    this.fill(backgroundcolor);						//z tego zmiana do tego co na górze tylko zmiana color
}
//move the activeTetromino.......................................................................................

//Control the piece.....................................................................................................
document.addEventListener("keydown", CONTROL); //Control

function CONTROL(event){										//Kontrola przyciskami - srzałkami
	if(event.keyCode==37){
		piece.moveLeft();				//http://pomle.github.io/keycode/ best ever
		 dropStart = Date.now(); // po każdym obrocie, ruchu musimy rozpocząć odliczanie
	}
	else if (event.keyCode==38){
		piece.rotate();
		 dropStart = Date.now();
	}
	else if (event.keyCode==39){
		piece.moveRight();
		 dropStart = Date.now();
	}
	else if (event.keyCode==40){
		piece.moveDown();
	}
}

//Collision detection Function..........................................................................................
//przy opadaniu i dotknięciu niżej klock i  czy koniec pola
Piece.prototype.collision = function(x,y,piece){      //KOLIZJA
    for( r = 0; r < piece.length; r++){                
        for(c = 0; c < piece.length; c++){
            // if the square is empty, we skip it
            if(!piece[r][c]){ 										//?? jeżeli nie backgroundcolor
                continue;
            }
            // coordinates of the piece after movement
            let newX = this.x + c + x;  //this.x + c + x from this.collision(x,y,piece);
            let newY = this.y + r + y;
            
            // conditions new if they're out of field then collision is true
            if(newX < 0 || newX >= COL || newY >= ROW){ 
                return true;
            }
            // skip newY < 0; board[-1] will crush our game---tetromino start y<0
            if(newY < 0){
                continue;
            }
            // check if there is a locked piece alrady in place
            if( board[newY][newX] != backgroundcolor){ //jeżeli nie kolor tła to znaczy że coś jest
                return true;
            }
        }
    }
    return false;
}
//........................................................................................................................................ 
 // move Down the piece                                             MOVE
Piece.prototype.moveDown = function(){
    if(!this.collision(0,1,this.activeTetromino)){ //jeżeli brak kolizji
        this.unDraw();
        this.y++;
        this.draw();
    }else{
        // we lock the piece and generate a new one          
        this.lock(); //jeżeli na dół i lock wtedy generuj nowy       LOCK()LATER
        p = randomPiece();
    }
    
}
																			  // W PRAWO, W LEWO
// move Right the piece
Piece.prototype.moveRight = function(){
    if(!this.collision(1,0,this.activeTetromino)){
        this.unDraw();
        this.x++;
        this.draw();
    }
}

// move Left the piece
Piece.prototype.moveLeft = function(){
    if(!this.collision(-1,0,this.activeTetromino)){
        this.unDraw();
        this.x--;
        this.draw();
    }
}
 
 // rotate the piece.............................................................................................................
Piece.prototype.rotate = function(){
   
  // if (tetrmonioN==4)tetrominoN=0;
	//else{
	//let tetrominoN = this.tetromino[(this.tetrominoN + 1)];
	//}
	let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length]; 
	//(0+1)%4=1, (1+1)%4=2...(1+3)%4=4
   
   let kick = 0; //cofnięcie jeżeli kolizja na razie 0
   
    if(this.collision(0,0,nextPattern)){
        if(this.x > COL/2){  // it's the right wall po x większe niż połowa
            kick = -1; // we need to move the piece to the left
        }else{// it's the left wall
            kick = 1; // we need to move the piece to the right
        }
    }
	//obrót rysowanie
	  if(!this.collision(kick,0,nextPattern)){ //
        this.unDraw(); //użuj funkcji unDraw czyli zamaż kolorem tła
        this.x += kick; //jeżeli kolizja pozioma to przesuń w prawo lub w lewo x czyli x+kick
        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; // (0+1)%4 => 1
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.draw();
    }
}

//random piece function............................................................................................
const PIECES = [ [z,"red"], [s,"green"], [t,"yellow"], [o,"blue"], [l,"purple"],
 [i,"cyan"], [j,"orange"]];//https://www.schemecolor.com/tetris-game-color-scheme.php  ???
 
function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0-6 bo tyle element.7
    return new Piece( PIECES[r][0],PIECES[r][1]);
}

let p = randomPiece();
//................................................................................................................................
let score = 0;
//........................................................................
Piece.prototype.lock = function(){                        //LOCK() FUNCTION
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we skip the vacant squares              
            if( !this.activeTetromino[r][c]){	 //>>?? a little of bit??????????????????????????
                continue;
            }
            // pieces to lock on top = GAME OVER
            if(this.y + r < 0){        //jeżeli y klocka mniejszy od pola czyli TOP
                alert("Game Over"); //alert
                gameOver = true; // stop request animation frame
                break;
            }
            // we lock the piece
            board[this.y+r][this.x+c] = this.color;//x,y coordinates piece and color active
        }
    }
    // remove full rows
    for(r = 0; r < ROW; r++){ //sprawdzamy wszystkie wiersze od 0
        let isRowFull = true; //czy cały wiersz pełny?
        for( c = 0; c < COL; c++){ //po wszystkich kolumnach patrzymy w wierszu
            isRowFull = isRowFull && (board[r][c] != backgroundcolor); //jeżeli w board r lub c jest false wszystko będzie false i  nie pełny wiersz
        }
        if(isRowFull){     //if the row is full, jeżeli pełny
            for( y = r; y > 1; y--){  // we move down all the rows above it
                for( c = 0; c < COL; c++){
                    board[y][c] = board[y-1][c]; //przesuamy w dół czyli w górę bo y=0 top
                }																	//dokończy ć????????????
            }
            // the top row board[0][..] has no row above it
            for( c = 0; c < COL; c++){
                board[0][c] = backgroundcolor;
            }
            // increment the score
            score += 10;
        }
    }
    // update the board
    drawBoard();
    
    // update the score
    scoreElement.innerHTML = score;
}
//.....................................................................................................................................
// drop the piece every 1sec 								!!!!!!!!!	CZAS !!!!!!!!!!!

let dropStart = Date.now();
let gameOver = false;
function drop(){
    let now = Date.now();
    let delta = now - dropStart;
    if(delta > 1000){
        p.moveDown();
        dropStart = Date.now();
    }
    if( !gameOver){
        requestAnimationFrame(drop);
    }
}

drop();
//...............................................................................................................................