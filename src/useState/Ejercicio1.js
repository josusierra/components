import React, {useState} from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1); 
    }
      
    function decrementar() {
      setContador(contador - 1);
    }
    
    return (
      <div>
        <p>Contador: {contador}</p>
        
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    );
  }
  
  export default Contador;