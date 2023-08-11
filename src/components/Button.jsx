import React, { useEffect } from "react";

const Button = ({ increment }) => {

  //recordemos que un useEffect tiene distintos comportameintos, uno de ellos
  //es cundo le pasamos un array de dependencias, lo que quieres decir, 
  //que solo se ejecutará cuando aquella dependecia cambie

  useEffect(() => {
    console.log("Se paso como prop otro increment");
  }, [increment]);

  return (
    <>
      <button onClick={() => increment()}>Incrementar</button>
    </>
  );
};

export default Button;
