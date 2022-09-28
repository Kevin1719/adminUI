import React from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../fetchData/useFetch'
import '../styles/ListeEtudiants.css'
function ListeEtudiants() {
    const { error, isPending, data: etudiant } = useFetch('http://localhost:8000/candidats')
    return (
        <div className='container' style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px"}}>
            { error && <div>{ error }</div> }
        { isPending && <div>
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        </div> 
        } 
            { etudiant && <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Cours préparatoires
                                <Link to={'#'} className='btn btn-primary btn-sm float-end'>Add Student</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>N° Matricule</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {etudiant.map((etudiant) =>(
                                        <tr key={etudiant.id}>
                                            <td>{etudiant.matricule}</td>
                                            <td>{etudiant.nom}</td>
                                            <td>{etudiant.prenom}</td>
                                            <td>{etudiant.email}</td>
                                            <td>
                                                <Link to={`#/${etudiant.id}`} className="btn btn-success btn-sm">Edit</Link>
                                            </td>
                                            <td>
                                                <button type='button' className='btn btn-danger btn-sm'>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ListeEtudiants