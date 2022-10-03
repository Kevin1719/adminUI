import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Inscription from './coursPrepa/Inscription'
import Accueil from "./Accueil";
import ListeDesEtudiants from "./ListeDesEtudiants/ListeDesEtudiants";
import Datatable from "./table/datatable/Datatable";
function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/table" element={  <Datatable /> } />
     </Routes>
     <Routes>
      <Route path="/" element={  <Accueil /> } />
     </Routes>
     <Routes>
      <Route path="/coursprepa" element={  <Inscription /> } />
     </Routes>
     <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
        <Routes>
          <Route path="/candidature" element={  <LinearStepper /> } />
          <Route path="/listeDesEtudiants" element={  <ListeDesEtudiants /> } />
        </Routes>
        </Paper>
      </Container>
      </>
    </>
  );
}

export default App;
