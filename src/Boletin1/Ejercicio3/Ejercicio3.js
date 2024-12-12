function AvisoError({ hasError }) {
    return (
      <div>
        {hasError && "Ha ocurrido un error"}
      </div>
    );
  }
  
  export default function App() {
    return (
      <div>
        <AvisoError hasError={true} />
        <AvisoError hasError={false} />
      </div>
    );
  }
  