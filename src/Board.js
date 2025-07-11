import React, { useState } from 'react';

const Square = ({ value, onClick }) => {
  const textColor =
    value === 'X'
      ? 'text-pink-300'  // Light pink
      : value === 'O'
      ? 'text-pink-600'  // Hot pink
      : '';

  return (
    <button
      onClick={onClick}
      className={`w-40 h-40 bg-black border border-white text-5xl font-bold ${textColor}`}

    >
      {value}
    </button>
  );
};

const calculateWinner = (squares) => {
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const isDraw = (squares) => {
  return squares.every(square => square !== null) && !calculateWinner(squares);
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const draw = isDraw(squares);
  const status = winner
    ? `Winner: ${winner}`
    : draw
    ? "It's a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const nextWinner = calculateWinner(nextSquares);
    const nextDraw = isDraw(nextSquares);

    if (nextWinner) {
      document.body.style.backgroundColor = '#90ee90';
      setTimeout(() => {
        handleRestart();
        document.body.style.backgroundColor = '#ffffff';
      }, 3000);
    } else if (nextDraw) {
      document.body.style.backgroundColor = '#f0ad4e';
      setTimeout(() => {
        handleRestart();
        document.body.style.backgroundColor = '#ffffff';
      }, 3000);
    }
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black text-white">
      <h1 className="text-5xl font-bold mb-6">Tic Tac Toe</h1>    
      <div className="text-2xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-4 bg-black p-4">
  {squares.map((value, index) => (
    <Square key={index} value={value} onClick={() => handleClick(index)} />
  ))}
      </div>  
      <button
  onClick={handleRestart}
  className="mt-4 px-4 py-2 bg-pink-300 text-pink-700 font-bold rounded hover:bg-pink-600 hover:text-white transition-colors duration-200"
>
  Restart
  </button>
    </div>
  );
};

export default Board;
