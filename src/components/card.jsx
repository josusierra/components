import PropTypes from "prop-types";
import "./App.css";

const perfiles = [
  {
    nombre: "Jose Sierra Moreno",
    biografia: "Full Stack Developer.",
    email: "josesierra@gmail.com",
    habilidades: ["JavaScript", "React", "Node.js"],
    edad: 10,
    imagen: "/anonimo.jpg",
    isPremium: true,
  },
  {
    nombre: "John Doe",
    email: 'johndoe@example.com',
    biografia: 'Software developer with a passion for React.',
    habilidades: ["JavaScript", "Angular", "Node.js"],
    edad: 18,
    imagen: "/anonimo.jpg",
    isPremium: false,
  },
  {
    nombre: 'Jane Smith',
    email: 'janesmith@example.com',
    bio: 'Frontend developer specializing in UX design.',
    habilidades: [],
    edad: 3,
    imagen: "",
    isPremium: false,
  },
];

export default function UserCard({ nombre, edad, email, habilidades, biografia }) {

  let contenidoHabilidades = (
    <ul>
      {habilidades.map((habilidad, index) => (
        <li key={index}>{habilidad}</li>
      ))}
    </ul>
  );

  if (habilidades.length === 0) {
    contenidoHabilidades = null;
  }
  if (!biografia) {
    biografia = "usuario no ha añadido una bio aún.";
  }

  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Email: {email}</p>
      <p>Biografía: {biografia}</p>
      {contenidoHabilidades}
      
    </div>
  );
}

UserCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  habilidades: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function List() {
  const listPerfiles = perfiles.map((perfil, index) => {
    const imagenPremium = perfil.isPremium ? <span className="premium-icon"></span> : null;

    return (
      <div className="contenedor" key={index}>
        <div className="div-foto">
          <a href="data:image/jpeg;base64,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" target="_blank" rel="noopener noreferrer">
            <img src={perfil.imagen || "/anonimo.jpg"} className="foto" alt="foto" />
          </a>
          {imagenPremium}
        </div>
        <UserCard
          nombre={perfil.nombre}
          edad={perfil.edad}
          email={perfil.email}
          habilidades={perfil.habilidades}
          biografia={perfil.biografia}
        />
      </div>
    );
  });

  return <div>{listPerfiles}</div>;
}
