import React from 'react'
import {Link} from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'
import './Navbar.css'
function Navbar() {
  return (
    <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    marginTop:'10px'}}>
    <ul className="nav-links">
      <li><Link to={'/'}>Accueil</Link></li>
      <li className="center"><Link to={'/coursprepa'}>Cours préparatoire</Link></li>
      <li className="upward"><Link to={'/candidature'}>Candidature</Link></li>
      <li className="upward"><Link to={'/listeDesEtudiants'}>Liste des étudiants</Link></li>
    </ul>
    </div>
  )
}

export default Navbar