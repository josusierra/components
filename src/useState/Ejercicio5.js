import React, {useState} from 'react';

function Contadormax5() {
    const [clic, setClic] = useState(0);
  
    function incrementar() {
      if (clic < 5) {
        setClic(clic + 1);
      }
    }
  
    function reset() {
        setClic(0);
    }
  
    return (
      <div>
        <p>Contador: {clic}</p>
        
        <button onClick={incrementar} disabled={clic === 5}>
          Incrementar
        </button>
  
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
export default Contadormax5;