import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/home">Home</Link>
        <Link to="/fase6">Perfiles About</Link>
        <Link to="/fase7">Fase7</Link>
        <Link to="/aboutPerfil">AboutPerfilFase6</Link>
        <Link to="/PostList">Pag1</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;