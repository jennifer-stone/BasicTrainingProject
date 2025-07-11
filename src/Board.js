import React, { useState } from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 border border-gray-400 text-2xl font-bold"
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

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (index) => {
    if (squares[index] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="text-lg mb-2">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        onClick={handleRestart}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Restart
      </button>
    </div>
  );
};

export default Board;


