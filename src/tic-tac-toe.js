class TicTacToe {
    constructor() {
    	this.currentPlayerSymbol = 'x';
    	this.field = [
    	[null,null,null],
    	[null,null,null],
    	[null,null,null]
    	];

    }

    getCurrentPlayerSymbol() {
    	return this.currentPlayerSymbol; 
    }

    nextTurn(rowIndex, columnIndex) {
    	if (this.field[rowIndex][columnIndex] == null) {
    		this.field[rowIndex][columnIndex] = this.currentPlayerSymbol; 
    		this.currentPlayerSymbol == 'x' ? this.currentPlayerSymbol = 'o' : this.currentPlayerSymbol = 'x';
    	}
    }

    isFinished() {
    	return this.getWinner() != null || this.noMoreTurns() ? true : false;
    }

    getWinner() {    	
    	if (this.field[0][0] == this.field[0][1] && this.field[0][2] == this.field[0][1]) return  this.field[0][0]; 
    	else if	(this.field[1][0] == this.field[1][1] && this.field[1][2] == this.field[1][1]) return  this.field[1][0];
    	else if	(this.field[2][0] == this.field[2][1] && this.field[2][2] == this.field[2][1]) return  this.field[2][0];  
			
		else if	(this.field[0][0] == this.field[1][0] && this.field[2][0] == this.field[1][0]) return  this.field[0][0]; 
    	else if	(this.field[0][1] == this.field[1][1] && this.field[2][1] == this.field[1][1]) return  this.field[0][1]; 
    	else if	(this.field[0][2] == this.field[1][2] && this.field[2][2] == this.field[1][2]) return  this.field[0][2]; 

    	else if	(this.field[0][0] == this.field[1][1] && this.field[2][2] == this.field[1][1]) return  this.field[0][0]; 
    	else if	(this.field[2][0] == this.field[1][1] && this.field[0][2] == this.field[1][1]) return  this.field[2][0]; 
    	   		
    	else return null;	
    }

    noMoreTurns() {
    	for (var i = 0; i <= 2; i++) {
    		for (var j = 0; j <= 2; j++) {
    			if (this.field[i][j] == null) return false;
    		}
    	}
    	return true;
    }

    isDraw() {
        return this.getWinner() == null && this.noMoreTurns();
    }
	
    getFieldValue(rowIndex, colIndex) {
    	return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
