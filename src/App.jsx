import { useState } from "react";

function esPrimo(numero) {
  if (numero == 2) return true;
  if (numero <= 1 || numero % 2 == 0) return false;
  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i == 0) return false;
  }
  return true;
}

function App() {
  const [numeroPrimo, setNumeroPrimo] = useState(2);
  return (
    <>
      <h1 className="text-4xl font-bold text-center m-5">Números primos:</h1>
      <div className="absolute w-100 -translate-y-1/2 -translate-x-1/2 text-center top-1/2 left-1/2 font-bold text-3xl">
        {numeroPrimo}
        <div className="flex gap-5 font-thin">
          <button
            className="border border-black rounded p-3 hover:shadow-2xl	transition duration-300"
            onClick={() => {
              for (let i = numeroPrimo + 1; true; i++) {
                if (esPrimo(i)) {
                  setNumeroPrimo(i);
                  break;
                }
              }
            }}
          >
            Aumentar
          </button>
          <button
            className="border border-black rounded p-3 hover:shadow-2xl	transition duration-300"
            onClick={() => {
              for (let i = numeroPrimo - 1; i > 1; i--) {
                console.log(esPrimo(i));
                if (esPrimo(i)) {
                  setNumeroPrimo(i);
                  break;
                }
              }
            }}
          >
            Disminuir
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
