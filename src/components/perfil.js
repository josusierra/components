import './App.css';

import { Link } from "react-router-dom";
import { profiles } from "./data";
const Profile = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h2>profile</h2>
        {profiles.map((e) => (
          <p key={e.id}>
            <Link to={`${e.id}`}>{e.name}</Link>
          </p>
        ))}
      </div>
    </>
  );
};
export default Profile;