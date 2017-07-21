import React, { Component } from 'react';
import Square from './Square.js';
import Board from './Board.js';
import Button from './Button.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });   
  }

  jumpTo(step) {
    if (step === 0) {
      this.resetData();
    } else {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      })
    }
  }

  resetData() {
    this.setState({
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    })
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
    const desc = move? 'Move #' + move : 'Start';

      return (
        <li key={move} className={(move === history.length - 1? 'current' : '')}>
          <a onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } 
    else if(this.state.stepNumber === 9) {
      status = 'Draw';
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className={"game container " + ((winner || this.state.stepNumber === 9)? 'disabled': '')}>
        <div className={"status " + (winner? 'winner': '')}>{status}</div>
        <div className="col col-5 game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="col col-5 game-info">
          <div>
            <div className="actions">
              {(winner || this.state.stepNumber === 9) && 
              <Button label={'Reset'} onClick={() => this.resetData()} />}
            </div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;