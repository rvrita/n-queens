/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //create board instance
  var board = new Board({'n': n});
  //create matrix variable
  var matrix = board.rows();
  //create for loop, looping through rows i
  for (var i = 0; i < n; i++) {
    //create for loop, looping through columns
    for (var j = 0; j < n; j++) {
      //toggle to i, j
      board.togglePiece(i, j);
      //check if conflicts
      if (board.hasAnyRooksConflicts()) {
        //if true toggle i, j
        board.togglePiece(i, j);
      }
    }
  }
  //solution = matrix
  var solution = matrix;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  if (n === 0) {
    return 1;
  }
  var solutionCount = n * countNRooksSolutions(n-1);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //create a new board
  debugger;
  var board = new Board({'n': n});
  //create a new matrix
  var matrix = board.rows();
  //place a piece in the matrix using toggle generated by a random number generator
  var startI = 0;
  var startJ = Math.floor(Math.random() * n);
  board.togglePiece(startI, startJ);
  //loop through the rows
  for (var i = 0; i < n; i++) {
    //loop through columns
    for (var j = 0; j < n; j++) {
      //check for piece
      if (startI === i && startJ === j) {
        continue;
      }
      //toggle piece
      board.togglePiece(i, j);
      //check for conflicts
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(i, j);
      }
    }
  }

  var solution = matrix;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};




// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
