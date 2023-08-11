import { useState, useEffect } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon";


export const usePokemon = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemons = async (AbortController) => {
    setLoading(true);

    try {
      const data = await (
        await fetch(URL, { signal: AbortController.signal })
      ).json();
      setList(data.results);
    } catch (error) {
      console.log("error", error);
      setError("algo salio mal :C");
    } finally {

      //este es un añadido mío, para simular que puede haber un error
      //pueden quitarlo y dejarlo como en las diapositivas
      setTimeout(() => {
        function getRandomInt(max) {
          return Math.floor(Math.random() * max)}
        const value = getRandomInt(20);
        console.log(value);
        if (value % 2 !== 0) {
          setError("algo salio mal :C");
          setList([]);
        }
        setLoading(false);
      }, 5000);
    }
  };

  useEffect(() => {
    const Controller = new AbortController();
    fetchPokemons(Controller);
    return () => {
      Controller.abort();
    };
  }, []);
  return [list, loading, error];
};



