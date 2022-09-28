import { Routes, Route } from "react-router-dom"
import '../styles/App.css';
import Accueil from './Accueil';
import Inscription from "./Inscription";
import ListeEtudiants from './ListeEtudiants';
import Navbar from "./Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ListeEtudiants/ > } />
        <Route path="/liste" element={ <ListeEtudiants/> } />
        <Route path="/register" element={ <Inscription/> } />
      </Routes>
    </div>
  );
}

export default App;
