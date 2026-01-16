/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
*/

function helper (board, word, wi, r, c, m, n){
    if (wi >= word.length) return true;
    if (r >= m || r < 0 || c < 0 || c >= n) return false;

    if (word[wi] !== board[r][c]) return false;
    let letter = board[r][c];
    board[r][c] = '#'

    const dr = [0,1, 0, -1];
    const dc = [1,0, -1, 0];

    for (let i = 0; i < 4; i++){
        newR = r + dr[i];
        newC = c + dc[i];
        if (helper(board, word, wi+1, newR,newC, m, n)) return true
    }

    // reset the state
    board[r][c] = letter;
    return false;
}

var exist = function (board, word){
    const m = board.length;
    const n = board[0].length;

    for (let i = 0; i < m ; i++){
        for (let j = 0; j < n ; j++){
            if (helper(board, word, 0, i,j, m, n)) return true;
        }
    }

    return false;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCCED"

if (exist(board,word)){
    console.log(`The word ${word} found`);
} else{
    console.log(`The word ${word} was not found`);
}