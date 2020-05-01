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
  //debugger;
  var result = [];
  var solutionChecker = function() { //should we pass the matrix in?
    var matrixCounter = 0;
    //if valid solution, return solution
    for (var k = 0; k < matrix.length; k++) {
      if (matrix[k].includes(1)) {
        matrixCounter ++;
      }
    }
    if (matrixCounter === n) {
      return true;
    } else {
      return false;
    }
  };

  /////START WITH ANCHOR POINT
  for (var startI = 0; startI < n; startI++) {
    for (var startJ = 0; startJ < n; startJ ++) {
      //create a new board
      //if (n === 6) { debugger; }
      var board = new Board({'n': n});
      //create a new matrix
      var matrix = board.rows();
      board.togglePiece(startI, startJ);
      /////LOOP THROUGH ALL POSSIBILITIES WITH CURRENT ANCHOR
      //loop through the rows
      for (var i = 0; i < n; i++) {
        //loop through columns
        for (var j = 0; j < n; j++) {
          //check for anchor piece
          if (startI === i && startJ === j) {
            continue;
          }
          //toggle piece
          board.togglePiece(i, j);
          //check for conflicts
          if (board.hasAnyQueensConflicts()) {
            board.togglePiece(i, j);
          }
          if (i === n - 1 && j === n - 1 ) {
            console.log('last internal iteration with current Anchor Point');
            console.log('solution checker', solutionChecker());
            if (solutionChecker()) {
              //result.push(matrix);
              console.log('result', result);
              console.log('return matrix', matrix);
              return matrix;
            }
          }
        }
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
