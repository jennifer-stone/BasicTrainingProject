import React from 'react';
<<<<<<< HEAD
import TicTacToe from './Board'; // assuming your component is in Board.jsx or Board.js

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      {/* <Board /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>JENNIFER</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TicTacToe />
>>>>>>> d74bae8 (new features)
=======
import Board from './Board'; // or './TicTacToe' depending on the filename

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Board />
>>>>>>> feature-
    </div>
  );
}

export default App;

