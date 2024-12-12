import React, {useState} from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <div>
      <h1>Lista</h1>
      <div>
        <form>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nombre"></input>
          <p>Nombre: {formData.firstName}</p>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apellido"></input>
          <p>Apellido: {formData.lastName}</p>
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Edad"></input>
          <p>Edad: {formData.age}</p>
        </form>
      </div>  

      <ul> </ul>
    </div>
  );

};

export default App;