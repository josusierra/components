import React, {useState} from 'react';

function ContadorClic() {
  const [clic, setClic] = useState(0);

  function contador() {
    setClic(clic + 1);
  }

  function reinicio() {
    setClic(0);
  }

  return (
    <div>
        <p>Total de clics: {clic}</p>
        <button onClick={contador}>Clicka</button>
        <button onClick={reinicio}>resetea</button>
    </div>
  );
}
export default ContadorClic;