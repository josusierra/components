import React, {useState} from 'react';

function Cambiador_de_Texto() {
    const [texto, setTexto] = useState('Original texto');
    function cambiarTexto() {
        setTexto("Texto Modificado");
      }
    
      function restaurarTexto() {
        setTexto("Texto Original");
      }
    
      return (
        <div>
          <p>Texto: {texto}</p>
          <button onClick={cambiarTexto}>Cambiar Texto</button>
          <button onClick={restaurarTexto}>Restaurar Texto</button>
        </div>
      );
    }
export default Cambiador_de_Texto;