import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Perfil from "./components/perfil";
import Details from "./components/Details";

  const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="perfil" element={<Perfil />}></Route>
              <Route path="details" element={<Details />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="*" element={ <h1> Error 404</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }

export default Router;