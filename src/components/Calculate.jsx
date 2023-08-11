import React, { useMemo } from "react";
import "../styles/calculateStyles.css";
import { useCounter } from "../hooks/useCounter";

const Calculate = () => {
  //useCounter es un hook echo por nosotros ;)9
  const [valor1, suma] = useCounter();
  const [valor2, suma2] = useCounter();

  //usamos useMemo de tal modo que el total solo vuelve a calcular
  //cuando "valor1" cambia
  let total = useMemo(() => {
    return valor1 + valor2;
  }, [valor1]);

  //al sumar al valor1 veremos la suma de valor1 y valor2 reflejada en el
  //total, pero al sumar al valor2, no veremos ningun cambio en el valor de total,
  //esto debido a que useMemo solo se va a ejecutar cuando valor1 tenga un cambio
  return (
    <>
      <h1>Calculate Memo</h1>
      <div className="counter">
        <h2>
          el valor del contador 1 es de ===={">"} {valor1}
        </h2>
      
        <h2>el valor del contador 2 es de  ===={">"} {valor2}</h2>
        <h2>
          el total solo se suma con un cambio en el contador 1 y el total es: {total}
        </h2>
      </div>
      <button onClick={suma}>sumar valor 1</button>
      <button onClick={suma2}>sumar valor 2 </button>
    </>
  );
};

export default Calculate;
