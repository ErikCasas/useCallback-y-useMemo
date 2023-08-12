import React, { useCallback, useState } from "react";
import Button from "./Button";

/*
Casi similar a useMemo, useCallback tiene una sitaxis similar useCallback(()=>{},[])
la gran diferencia de que useCallback guarda en memoria todo el scope de la función
esto lo podemos ver al momento en que ejecutamos la función increment con useCallback
*/

const UseCallback = () => {

  
  //Esta comentada la implementacion del hook y se esta ejecutando el caso erroneo
  const [count, setCount] = useState(0);
  
  console.log("count :>> ", count);

  // const increment = useCallback(() => {
  //   setCount(count + 1);
  //   console.log("count :>> ", count);
  // }, []);

  //al no usar useCallback, veremos como aunque le pasamos la misma función
  //al componente Button, este imprimirá por consola, que le estan pasando
  //diferentes increment ante cualquier renderizado

  const increment = () => {
    console.log(count)
    setCount(count+1);}

  return (
    <>
      <h2>contador en : {count}</h2>
      <div>UseCallback</div>
      <Button increment={increment} />
    </>
  );
};

export default UseCallback;
