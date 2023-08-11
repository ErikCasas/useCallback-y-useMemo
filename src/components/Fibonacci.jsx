import { useState, useMemo } from "react";

const Fibonacci = ({ n }) => {

  /*
  La serie fibonacci es un calculo que en programación puede ser
  una buena introducción al concepto de la recursividad, que en 
  pocas palabras es una función que se retorna a sí misma hasta que 
  llega a un punto deseado, en este ejemplo tenemos primero comentada la 
  implementación de useMemo, y al ver como se imprime el mensaje en la consola,
  incluso sin que accionemos de forma directa la función fibonacci,
  una vez veamos como funciona, comentamos la función, y el la etiqueta h3,
  y descomentamos la parte que implementa useMemo y veremos como esto se sooluciona
  
  */
  const [count, setCount] = useState(0);

  // const fiboMemo = useMemo(() => {
  //   function fibonacci(n) {
  //     console.log("Se hizo un calculo");
  //     if (n <= 1) return n;
  //     return fibonacci(n - 1) + fibonacci(n - 2);
  //   }
  //   return fibonacci(n);
  // }, [n]);

  const fibonacci = (n) => {
    console.log("Se hizo un calculo");
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <>
      {/* <h3>
        fibonacci de {n} es: {fiboMemo}
      </h3> */}
      <h3>
        fibonacci de {n} es: {fibonacci(n)}
      </h3>
      <p>el contador esta en: {count}</p>
      <button onClick={() => setCount(count + 1)}>sumar</button>
    </>
  );
};

export default Fibonacci;
