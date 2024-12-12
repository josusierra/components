import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import AboutPerfil from "./components/AboutPerfil";
import PostList from "./components/PostList";
import Fase6 from "./components/AppFase6";
import Fase7 from "./components/AppFase7";

  const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="AboutPerfil" element={<AboutPerfil />}></Route>
              <Route path="fase6" element={<Fase6 />}></Route>
              <Route path="fase7" element={<Fase7 />}></Route>
              <Route path="PostList" element={<PostList />}></Route>
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