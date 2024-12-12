function Drink({ name }) {
    let plantPart, caffeineContent, age;
  
    if (name === 'té') {
        plantPart = 'hoja';
        caffeineContent = '15–70 mg/taza';
        age = '4,000+ años';
    } else {
        plantPart = 'grano';
        caffeineContent = '80–185 mg/taza';
        age = '1,000+ años';
    }
  
    return (
        <section>
            <h1>{name}</h1>
        <dl>
            <dt>Parte de la planta</dt>
            <dd>{plantPart}</dd>
            <dt>Contenido de cafeína</dt>
            <dd>{caffeineContent}</dd>
            <dt>Antigüedad</dt>
            <dd>{age}</dd>
        </dl>
        </section>
    );
  }
  
export default function DrinkList() {
    return (
        <div>
            <Drink name="té" />
            <Drink name="café" />
        </div>
    );
}
  