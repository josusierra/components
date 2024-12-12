import { useParams, useNavigate } from "react-router-dom";
import { profiles } from "./data";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const oneProfile = profiles.find((e) => e.id === Number(id));
  return (
    <>
      <div
        style={{
          textAlign: "left",
        }}
      >
        <h1>{`Nombre: ${oneProfile.name}`}</h1>
        <h2>{`Email: ${oneProfile.email}`}</h2>
        <h2>{`Bio: ${oneProfile.bio}`}</h2>
        <h2>{`Skills: ${oneProfile.skills}`}</h2>
        <img src={oneProfile.imageUrl} alt={oneProfile.name} width={300} />
      </div>
      <button onClick={() => navigate(-1)}>← Back</button>
    </>
  );
};
export default Details;