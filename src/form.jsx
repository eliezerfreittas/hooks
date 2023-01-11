import React, {useState, useEffect, useRef} from 'react';

export function Form(){
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');
  
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  
  const focusInput = () => {
    inputElement.current.focus();
  }
  
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={focusInput}>Focus Input</button>

      <p>{`Current Value: ${inputValue}`}</p>
      <p>{`Previous Value: ${previousInputValue.current}`}</p>
    </>
  )
}
// useRef pode rastrear os valores de estado anterior