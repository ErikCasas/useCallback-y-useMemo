# useCallback y useMemo

RECOMEDACIÓN: Antes de sumergirse en el uso de `useCallback` y `useMemo`, es aconsejable tener un entendimiento básico del hook useEffect. Esto te permitirá relacionar conceptos y facilitar la migración a estas nuevas herramientas. Siempre es útil consultar la documentación oficial de [useMemo](https://es.react.dev/reference/react/useMemo "click aquí") y  [useCallback](https://es.react.dev/reference/react/useCallback "click aquí")

---

## useCallback



`useCallbck` es un hook utilizado para optimizar el rendimiento que se caracteriza por memorizar la función en caché, esto quiere decir que ante cualquier renderizado o re-renderizado, el scope no cambiara ni se volvera a crear una nueva instancia de esta función, hasta que se le indique que puede hacerlo. Recordando que recibe como parametros, una función callback y un array de dependencias, en donde el callback será la función que buscamos guardar en memoria, y el array de dependecias contendra los valores, que ante cualquier cambio en uno de esos valores, se volverá ejecutará la función que le indicamos.

```javascript
const aFunction = useCallback(()=>{
    // logica que deseamos realizar
    console.log("holaa")
},[/*dependencias*/])

```

### ejemplo :heartpulse:

Al usar useCallback aquí, estamos asegurando que la función handleDelete sea memorizada y solo se recreará si la variable items cambia. Esto evita la recreación innecesaria de la función en cada renderizado y mejora el rendimiento del componente, especialmente en listas grandes.
```javascript
function ItemList() {
  const [items, setItems] = useState([]);
  
  const handleDelete = useCallback((index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }, [items]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {item} <button onClick={() => handleDelete(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
```
---
# useMemo

`useMemo` es un hook que también apunta a mejorar el rendimiento de las aplicaciones React al memoizar valores calculados. Aunque comparte una sintaxis similar con useCallback, la diferencia clave radica en que useMemo memorizaen caché un **_valor_** devuelto por una función, evitando cálculos costosos que podrían repetirse innecesariamente.

```javascript
const value = useMemo(()=>{
    // logica de algun calculo costoso
    // como la funcion fibonacci
    console.log("holaa")
},[/*dependencias*/])
```

### ejemplo :love_letter:

En este ejemplo, calculateTotalPrice es la función que realiza el cálculo del precio total. Usando useMemo, aseguramos que el cálculo se realice solo cuando product o quantity cambian, y el valor del total se memoiza entre renderizados. Esto puede ser especialmente útil cuando el cálculo es intensivo y no queremos repetirlo en cada renderizado del componente.

```javascript
function ProductDetails({ product, quantity }) {
  const calculateTotalPrice = () => {
    console.log('Calculating total price...');
    return product.price * quantity;
  };

  const totalPrice = useMemo(calculateTotalPrice, [product, quantity]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio unitario: ${product.price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}
```