import React, { useState } from 'react';
import './App.css';

function App() {
  // State untuk menyimpan angka pertama, operasi, dan angka kedua
  const [number1, setNumber1] = useState('');
  const [operation, setOperation] = useState('');
  const [number2, setNumber2] = useState('');

  // Fungsi untuk menambahkan angka ke layar
  const addNumber = (digit) => {
    if (operation === '') {
      setNumber1(number1 + digit);
    } else {
      setNumber2(number2 + digit);
    }
  };

  // Fungsi untuk menetapkan operasi
  const setOperationFunc = (op) => {
    if (number1 !== '' && number2 === '') {
      setOperation(op);
    }
  };

  // Fungsi untuk menghitung hasil
  const calculate = () => {
    if (number1 !== '' && operation !== '' && number2 !== '') {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      let result;
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          result = '';
      }
      setNumber1(result.toString());
      setOperation('');
      setNumber2('');
    }
  };

  // Fungsi untuk menghapus semua angka
  const clearAll = () => {
    setNumber1('');
    setOperation('');
    setNumber2('');
  };

  return (
    <div className="calculator">
      <div className="display">
        {number1} {operation} {number2}
      </div>
      <div className="buttons">
        <button onClick={() => addNumber('7')}>7</button>
        <button onClick={() => addNumber('8')}>8</button>
        <button onClick={() => addNumber('9')}>9</button>
        <button onClick={() => setOperationFunc('/')}>/</button>
        <button onClick={() => addNumber('4')}>4</button>
        <button onClick={() => addNumber('5')}>5</button>
        <button onClick={() => addNumber('6')}>6</button>
        <button onClick={() => setOperationFunc('*')}>*</button>
        <button onClick={() => addNumber('1')}>1</button>
        <button onClick={() => addNumber('2')}>2</button>
        <button onClick={() => addNumber('3')}>3</button>
        <button onClick={() => setOperationFunc('-')}>-</button>
        <button onClick={() => addNumber('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => clearAll()}>C</button>
        <button onClick={() => setOperationFunc('+')}>+</button>
      </div>
    </div>
  );
}

export default App;
