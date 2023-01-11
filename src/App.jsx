import React, { useState } from 'react';
import { Division } from './styles';
import { Timer } from './timer';
import { User } from './user';
import { Form } from './form';

export default function App(){
  
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue", year: "2023"}
    });
  }
  
  return (
    <Division>
      <Division>
        <h3>Hooks: useState</h3>
        <button 
          type="button" 
          onClick={updateColor}>
          Alternar Cor e Ano
        </button>
        <p>Cor: {car.color}</p>
        <p>Ano: {car.year}</p>
      </Division>
        
      <Division>
        <h3>Hooks useEffect</h3>
        <Timer />
      </Division>

      <Division>
        <h3>Hooks UseContext</h3>
        <User />
      </Division>

      <Division>
        <h3>Hooks UseRef</h3>
        <Form  />
      </Division>
    </Division>

  )
}

