// src/Ejercicio4.js
function Notificacion({ isCompleted }) {
    return (
      <div>
        {isCompleted ? "v" : "x"}
      </div>
    );
  }
  
  export default function App() {
    return (
      <div>
        <Notificacion isCompleted={true} />
        <Notificacion isCompleted={false} />
      </div>
    );
  }
  