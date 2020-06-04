const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d"); //contex-<ctx
ctx.fillRect(0,0, canvas.width, canvas.height);

const ROW=20;
const COLUMN=10;

let board=[];
for (r=0;r<ROW;r++){
  board[r]=[];
  for(c=0; c<COLUMN;c++){
    board[r][c]="white"
  }
}
function drawBoard(){
  for(r=0;r<ROW;r++){
    for(c=0;c<COL;c++){
      drawSquare(c,r,board[r][c]);
    }
  }
}
  drawBoard();

  
const z =[
  [[1,1,0], //z=[0]
  [0,1,1],
  [0,0,0]],
          
  [[0,0,1],  //z=[1]
  [0,1,1],
  [0,1,0]],
          
  [[0,0,0],
  [1,1,0],
  [0,1,1]],
  
  [[0,1,0],
  [1,1,0],
  [1,0,0]] 
];

let piece=z[0];
const pieceColor="orange";
for(r=0;r<piece.length;r++){
  for(c=0;c<piece.length;c++){
    if(piece[r][c]){
      drawSquare(c,r,pieceColor);
    }
  }
};

