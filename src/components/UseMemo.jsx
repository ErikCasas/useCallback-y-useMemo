import { useState } from "react";
import Fibonacci from "./Fibonacci";

const UseMemo = () => {

  /*
  useMemo es un hook el cual nos sirve para Memorizar el resultado de 
  un calculo que puede llegar a ser muy costoso, para que de este modo
  entre renderizados, no se volvera a realizar el calculo, solo hasta 
  que cambie aquel valor que creemos que si es necesario para la operación,
  teniendo un comportamiento similar al useEffect
  
  */
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useMemo!!</h1>

      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <Fibonacci n={count} />
    </>
  );
};

export default UseMemo;
