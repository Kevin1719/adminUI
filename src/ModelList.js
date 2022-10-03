import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModelList = ({ data }) => {
  const [search, setSearch] = useState('');
  const [annee, setAnnee] = useState('');
  const [grp, setGrp] = useState('');
  const ans = []
  const groupe = []

  data.map(donnee => (
    ans.includes(donnee.annee) ? ans : ans.push(donnee.annee)
  ))
  data.map(donnee => (
    groupe.includes(donnee.groupe) ? groupe : groupe.push(donnee.groupe)
  ))
  
  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Liste L1</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder='Rechercher étudiants'
            />
          </InputGroup>
        </Form>
        
          <select onChange={e=>{setAnnee(e.target.value)}} style={{cursor:'pointer'}}>
            {ans.length > 0 && ans.sort().reverse() && ans.map(y => (
              <option value={y}>{y}</option>
            ))}
          </select>
          <select onChange={e=>{setGrp(e.target.value)}} style={{cursor:'pointer'}}>
            {groupe.length > 0 && groupe && groupe.map(gp => (
              <option value={gp}>{gp}</option>
            ))}
          </select>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Année</th>
              <th>Groupe</th>
            </tr>
          </thead>
          <tbody style={{cursor:'pointer'}}>

              {/*

                if(search.toLowerCase() === '' && grp === "all"){
                  return item.annee.includes(annee)
                }
                else if(search.toLowerCase() !== ''){
                  return  item.candidat.prenom.toLowerCase().includes(search)&&item.annee.includes(annee)
                }
                
              */}

            {data &&
              data.filter((items) => {
                  return search.toLowerCase() === ''
                    ? items.annee.includes(annee)&&items.groupe.includes(grp)
                    : items.candidat.prenom.toLowerCase().includes(search)&&items.annee.includes(annee)&&items.groupe.includes(grp);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.candidat.prenom}</td>
                  <td>{item.candidat.nom}</td>
                  <td>{item.candidat.email}</td>
                  <td>{item.annee}</td>
                  <td>{item.groupe}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )}
 
export default ModelList;