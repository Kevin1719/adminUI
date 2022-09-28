import React from 'react'
import {Link} from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    marginBottom:'20px',
    marginTop:'10px'}}>
    <ul class="nav-links">
      <li><Link to={'/liste'}>Dashboard</Link></li>
      <li className="center"><Link to={'/liste'}>Liste des étudiants</Link></li>
      <li className="upward"><Link to={'/register'}>Inscription</Link></li>
      <li className="forward"><Link to={'/register'}>Feedback</Link></li>
    </ul>
    </div>
  )
}

export default Navbar