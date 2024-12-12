import React, {useState} from 'react';

function Mostrar_Ocultar() {
    const [mostrar, setMostrar] = useState(false);
    //cambia entre false y true
    function alternarMostrar() {
        setMostrar(!mostrar);
    }

    return (
        <div>
        <button onClick={alternarMostrar}>Mostrar/Ocultar</button>

        {mostrar && <p>e un p</p>}
        </div>
    );
}
export default Mostrar_Ocultar;