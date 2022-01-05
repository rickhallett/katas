/**
 * Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid 
with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids 
(also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array 
representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. 
The cells of the sudoku board may also contain 0's, which will represent empty cells. 
Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

 */

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const trueSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const falseSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

describe('TDD', () => {
    let trueSudoku;
    let falseSudoku;
    
    beforeEach(() => {
        trueSudoku = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9],
        ];

        falseSudoku = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 0, 3, 4, 8],
            [1, 0, 0, 3, 4, 2, 5, 6, 0],
            [8, 5, 9, 7, 6, 1, 0, 2, 0],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 0, 1, 5, 3, 7, 2, 1, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 0, 0, 4, 8, 1, 1, 7, 9],
        ];
    });

    it('is a function that exports internal functions for unit testing', () => {
        const exports = validSolution(trueSudoku, (unitTest = true));

        const internalFunctions = {
            matrix: trueSudoku,
            checkForEmptyCells: exports.checkForEmptyCells,
            createRows: exports.createRows,
            createCols: exports.createCols,
            createBox: exports.createBox,
            validateRow: exports.validateRow,
            validateCol: exports.validateCol,
            validateBox: exports.validateBox,
            validateMatrix: exports.validateMatrix,
        };

        assert.deepEqual(exports, internalFunctions);
    });

    it('does not mutate the passed in array', () => {
        const exports = validSolution(trueSudoku, (unitTest = true));

        assert.deepEqual(exports.matrix, trueSudoku);
        assert.notEqual(exports.matrix, trueSudoku);
    });

    it('will throw an internal error on discovering an empty cell and exit futher computation', () => {
        assert.equal(validSolution(falseSudoku), false);
        const exports = validSolution(falseSudoku, unitTest = true);

        assert.equal(exports.checkForEmptyCells(falseSudoku.slice()), false);
    });

    it('can create sorted rows', () => {
        const exports = validSolution(trueSudoku, unitTest = true);
        for (let i = 0; i < 9; i++) {
            assert.deepEqual(exports.createRows()[i], [1,2,3,4,5,6,7,8,9]);
        }
    });

    it('can create sorted columns', () => {
        const exports = validSolution(trueSudoku, unitTest = true);
        
        const cols = exports.createCols(trueSudoku.slice());
        
        for (let i = 0; i < 9; i++) {
            assert.deepEqual(exports.createCols()[i], [1,2,3,4,5,6,7,8,9]);
        }
         
    });

    xit('can create boxes', () => {});

    xit('can validate a row', () => {});

    xit('can validate a column', () => {});

    xit('can validate a box', () => {});
});

describe('Codewars Tests', () => {
    xit('validates true suduokus', () => {
        assert.equal(
            validSolution([
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9],
            ]),
            true
        );

        assert.equal(
            validSolution([
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 0, 3, 4, 8],
                [1, 0, 0, 3, 4, 2, 5, 6, 0],
                [8, 5, 9, 7, 6, 1, 0, 2, 0],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 0, 1, 5, 3, 7, 2, 1, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 0, 0, 4, 8, 1, 1, 7, 9],
            ]),
            false
        );
    });
});

// Implementation

function validSolution(sudoku, unitTest) {
    let matrix = sudoku.slice();
    let rows = [];
    let cols = [];
    let boxes = [];

    function checkForEmptyCells(m = matrix) {
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                if (m[i][j] === 0) return false;
            }
        }
    }

    function createRows(m = matrix) {
        for (let i = 0; i < m.length; i++) {
            rows.push(m[i].sort());
        }

        return rows;
    }

    function createCols(m = matrix) {
        for (let row = 0; row < m.length; row++) {
            let tempCol = [];
            for (let col = 0; col < m[row].length; col++) {
                tempCol.push(m[col][row]);
            }
            cols.push(tempCol.sort());            
        }
        return cols;
    }

    function createBox() {}

    function validateRow() {}

    function validateCol() {}

    function validateBox() {}

    function validateMatrix() {}

    if (unitTest) {
        return {
            matrix,
            checkForEmptyCells,
            createRows,
            createCols,
            createBox,
            validateRow,
            validateCol,
            validateBox,
            validateMatrix,
        };
    }

    if(!checkForEmptyCells()){
        return false;
    };

    return true;
}

// Alt
