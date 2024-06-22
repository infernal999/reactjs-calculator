import { useState } from 'react';
import { motion } from 'framer-motion';
import CalculatorButtons from './Components/CalculatorButtons';

function App() {
  const [buttons, setButtons] = useState([
    '(',
    ')',
    'n!',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    'C',
    0,
    '=',
  ]);
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  function inputHandler(e) {
    const value = e.target.innerText;

    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const calculation = eval(input).toString();
        setResult(calculation);
        setInput(calculation);
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    } else if (value === 'n!') {
      const inputVal = result ? parseInt(result) : parseInt(input);
      const factorialResult = factorial(inputVal);
      setResult(factorialResult.toString());
      setInput(factorialResult.toString());
    } else {
      if (result && !isNaN(value)) {
        setInput(value);
        setResult('');
      } else if (result) {
        setInput(result + value);
        setResult('');
      } else {
        setInput(prevInput => prevInput + value);
      }
    }
  }

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }

  return (
    <main className="w-screen h-screen bg-gradient-to-b from-indigo-800 to-indigo-900 flex items-center justify-center">
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col justify-end w-[25%] h-[60%]  bg-black rounded border border-black border-4 shadow-[0px_10px_50px_1px_rgba(0,0,0,0.75)]"
      >
        <input
          type="text"
          className="w-full h-40 text-6xl text-right text-white bg-transparent outline-none px-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis"
          placeholder="0"
          value={result || input}
          onChange={e => setInput(e.target.value)}
        />
        <hr 
        class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <CalculatorButtons buttons={buttons} inputHandler={inputHandler} />
      </motion.div>
    </main>
  );
}

export default App;
