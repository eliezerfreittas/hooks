import React, { useState, useEffect } from "react";

export function Timer() {

  const [count, setCount] = useState(0);
  const [calculation, setCauculation] = useState(0); 

  useEffect(() => {
    setCauculation(() => count * 2);
  }, [count]);
  //[count] Quando a variável count for atualizada, o efeito será executado novamente
  //[] --> Apenas na renderização inicial  

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={
      () => setCount((c) => c + 1)}>+
      </button>
      <p>Calculo: {calculation}</p>
    </>
  );
}