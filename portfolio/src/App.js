import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Importation de la page d'accueil
import ProjectDetail from './pages/ProjectDetail'; // Ajoutez l'importation
import About from './pages/About'; // Importation de la page À propos
import Projects from './pages/Projects'; // Importation de la page Projets
import Contact from './pages/Contact'; // Importation de la page Contact
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Affiche la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Affiche la page À propos */}
        <Route path="/projects" element={<Projects />} /> {/* Affiche la page Projets */}
        <Route path="/projects/:id" element={<ProjectDetail />} /> {/* Affiche la page de détail du projet */}
        <Route path="/contact" element={<Contact />} /> {/* Affiche la page Contact */}
        <Route path="*" element={<Error404 />} /> {/* Route pour gérer 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;