function Item({ name, importance }) {
    return (
      <li className="item">
        {name} {importance > 0 && <i>(Importancia: {importance})</i>}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Lista de equipaje de Sally Ride</h1>
        <ul>
          <Item importance={9} name="Traje espacial" />
          <Item importance={0} name="Casco con dorado a la hoja" />
          <Item importance={6} name="Fotografía de Tam" />
        </ul>
      </section>
    );
  }