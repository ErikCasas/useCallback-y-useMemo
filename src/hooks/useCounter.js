import { useState } from "react";


//Hook perzonalisado para hacer contadores con mas facilidad
//IMPORTANTE: para crear un hook personalizado, este debe iniciar con "use"
export const useCounter = () => {
    
  const [count, setCount] = useState(0);

  const sum = () => {
    setCount(count + 1);
  };

  const res = () => {
    setCount(count - 1);
  };
  const rei = () => {
    setCount(0);
  };

  return [count, sum, res, rei];
};


