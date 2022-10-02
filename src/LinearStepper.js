import React, { useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { MDBFile } from 'mdb-react-ui-kit';
import './style.css'
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Information personnelle",
    "Information sur les parents",
    "Dossiers à fournir",
    "Activités professionnelles(s'il a lieu)",
    "Activités et centres d'intérêt",
    "Candidature",
  ];
}

function getStepContent(step,
                        nom, setNom,
                        prenom, setPrenom, 
                        dateDeNaissance, setDateDeNaissance,
                        lieuDeNaissance, setLieuDeNaissance,
                        nationalite, setNationalite,
                        situationFamiliale, setStatus,
                        nombreEnfant, setNbrEnfant,
                        personnalAdress, setPersonnalAdress,
                        email, setEmail,
                        telephone, setTelephone,
                        genre, setGenre,handleChange,

                        nomPere, setNomPere,
                        telephonePere, setTelephonePere,
                        professionPere, setProfessionPere,
                        emailPere, setEmailPere,
                        
                        nomMere, setNomMere,
                        telephoneMere, setTelephoneMere,
                        professionMere, setProfessionMere,
                        emailMere, setEmailMere,

                        nomTuteur, setNomTuteur,
                        telephoneTuteur, setTelephoneTuteur,
                        professionTuteur, setProfessionTuteur,
                        emailTuteur, setEmailTuteur,

                        setSelectedDiplome,
                        setSelectedReleveDuBacc,
                        setSelectedReleveDeNoteSeconde,
                        setSelectedReleveDeNotePremiere,
                        setSelectedReleveDeNoteTerminale,
                        setCertificatDeResidence,
                        setSelectedCINorCIS,
                        setSelectedPhotoIdentite,
                        setCV,
                        setBordereauEsti,

                        nbrStage,
                        setNbrStage,
                        entrepriseStage,
                        setEntrepriseStage,
                        nbrAlternance,
                        setNbrAlternance,
                        entrepriseAlternance,
                        setEntrepriseAlternance,
                        autreActivitePro,
                        setAutreActivitePro,

                        travauxPerso,
                        setTravauxPerso,
                        activiteParaPro,
                        setActiviteParaPro,

                        setNiveauCandidater,
                        setParcours
                        ) 
{
  switch (step) {
    case 0:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom</span>
                <input type="text" placeholder="Entrer votre nom" value={nom} onChange={(e)=>{setNom(e.target.value)}} required/>
              </div>
              <div className="input-box">
                <span className="details">Prénom</span>
                <input type="text" placeholder="Entrer votre prénom" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} required/>
              </div>
              <div className="input-box">
                <span className="details">Date de naissance</span>
                <input type="date" value={dateDeNaissance} onChange={(e)=>{setDateDeNaissance(e.target.value)}} required/>
              </div>
              <div className="input-box">
                <span className="details">Lieu de naissance</span>
                <input type="text" placeholder="Lieu de naissance" value={lieuDeNaissance} onChange={(e)=>{setLieuDeNaissance(e.target.value)}} required/>
              </div>
              <div className="input-box">
                <span className="details">Nationalité</span>
                <input type="text" placeholder="Entrer votre Nationalité" value={nationalite} onChange={(e)=>{setNationalite(e.target.value)}} required/>
              </div>
              <div className="input-box">
                <span className="details">Situation matrimoniale</span>
                <select name="status" onChange={(e)=>{setStatus(e.target.value)}} style={{
                            width: '100%',
                            height: '45px',
                            minWidth: '15ch',
                            maxWidth: '30ch',
                            border: '1px solid #ccc',
                            borderRadius: '0.25em',
                            padding: '0.25em 0.5em',
                            fontSize: '15px',
                            cursor: 'pointer',
                            lineHeight: '1.1',
                            backgroundColor: '#fff',
                            backgroundImage: 'linear-gradient(to top, #f9f9f9, #fff 33%)'
                }}>
                  <option value="Celibataire">Celibataire</option>
                  <option value="Marié(e)">Marié(e)</option>
                  <option value="Veuf(ve)">Veuf(ve)</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">Nombre d'enfant</span>
                <input type="number" placeholder="Nombre d'enfant" required value={nombreEnfant} onChange={(e)=>{setNbrEnfant(e.target.value)}} />
              </div>
              <div className="input-box">
                <span className="details">Adresse personnel</span>
                <input type="text" placeholder="Entrer votre adresse"  value={personnalAdress} onChange={(e)=>{setPersonnalAdress(e.target.value)}} required/>
              </div>
              <div className="input-box">
                <span className="details">Numéro de téléphone</span>
                <input type="number" placeholder="Numéro de téléphone" value={telephone} onChange={(e)=>{setTelephone(e.target.value)}} required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Entrer votre adresse mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
              </div>
            </div>
            <div className="gender-details">
          <input type="radio" value="Homme" checked={genre === 'Homme'} onChange={handleChange} name="genre" id="dot-1"/>
          <input type="radio" value="Femme" checked={genre === 'Femme'} onChange={handleChange} name="genre" id="dot-2"/>
          <span className="gender-title">Genre</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Homme</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Femme</span>
          </label>
          </div>
        </div>
          </form>
        </div>
      </div>
      </div>
    
      )

    case 1:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom du père</span>
                <input type="text" placeholder="Nom du père" value={nomPere} onChange={(e)=>{setNomPere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Téléphone du père</span>
                <input type="number" placeholder="Téléphone" value={telephonePere} onChange={(e)=>{setTelephonePere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Profession du père</span>
                <input type="text" placeholder="Profession" value={professionPere} onChange={(e)=>{setProfessionPere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Email du père</span>
                <input type="email" placeholder="Email" value={emailPere} onChange={(e)=>{setEmailPere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Nom de la mère</span>
                <input type="text" placeholder="Nom de la mère" value={nomMere} onChange={(e)=>{setNomMere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Téléphone de la mère</span>
                <input type="number" placeholder="Téléphone" value={telephoneMere} onChange={(e)=>{setTelephoneMere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Profession de la mère</span>
                <input type="text" placeholder="Profession" value={professionMere} onChange={(e)=>{setProfessionMere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Email de la mère</span>
                <input type="email" placeholder="Email" value={emailMere} onChange={(e)=>{setEmailMere(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Nom du tuteur</span>
                <input type="text" placeholder="Nom du père" value={nomTuteur} onChange={(e)=>{setNomTuteur(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Téléphone du tuteur</span>
                <input type="number" placeholder="Téléphone" value={telephoneTuteur} onChange={(e)=>{setTelephoneTuteur(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Profession du tuteur</span>
                <input type="text" placeholder="Profession" value={professionTuteur} onChange={(e)=>{setProfessionTuteur(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Email du tuteur</span>
                <input type="email" placeholder="Email" value={emailTuteur} onChange={(e)=>{setEmailTuteur(e.target.value)}}/>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
    case 2:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Diplôme certifié du Baccalauréat</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setSelectedDiplome(e.target.files[0])}}/>
              </div>
              <div className="input-box">
                <span className="details">Relevé de notes certifié du Baccalauréat</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setSelectedReleveDuBacc(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">Relevé de notes 2nd</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setSelectedReleveDeNoteSeconde(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">Relevé de notes 1ère</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setSelectedReleveDeNotePremiere(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">Relevé de notes Tle</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setSelectedReleveDeNoteTerminale(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">Certificat de résidence</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setCertificatDeResidence(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">Photo d'identité</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setSelectedPhotoIdentite(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">CIN certifiée ou CIS</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setSelectedCINorCIS(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">Curriculum Vitae (CV)</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setCV(e.target.files[0])}} />
              </div>
              <div className="input-box">
                <span className="details">Bordereau d'inscription</span>
                <MDBFile size='lg' id='formFileLg' onChange={e =>{setBordereauEsti(e.target.files[0])}} />
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
    case 3:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nombre de Stage</span>
                <input type="number" placeholder="Nombre de stage" value={nbrStage} onChange={(e)=>{setNbrStage(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Nom(s) d'entreprise</span>
                <input type="text" placeholder="Entreprise" value={entrepriseStage} onChange={(e)=>{setEntrepriseStage(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Nombre d'alternance</span>
                <input type="number" placeholder="Nombre d'alternance" value={nbrAlternance} onChange={(e)=>{setNbrAlternance(e.target.value)}}/>
              </div>
              <div className="input-box">
                <span className="details">Nom(s) d'entreprise</span>
                <input type="text" placeholder="Entreprise"value={entrepriseAlternance} onChange={(e)=>{setEntrepriseAlternance(e.target.value)}} />
              </div>
              <div className="input-box">
                <span className="details">Autre activité professionnelle</span>
                <input type="text" placeholder="autre" value={autreActivitePro} onChange={(e)=>{setAutreActivitePro(e.target.value)}}/>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
      case 4:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details" style={{marginBottom:'20px'}}>Indiquez les travaux personnels que vous avez réalisés ou les travaux collectifs auxquels vous avez participé (mémoires de recherche, articles de revues et de journaux, livres, etc.) :</span>
                <textarea placeholder="Description" value={travauxPerso} onChange={e=>setTravauxPerso(e.target.value)} style={{height:'20vh'}} />
              </div>
              <div className="input-box">
                <span className="details" style={{marginBottom:'40px'}}>Indiquez les activités autres que professionnelles ou d’études dans lesquelles vous vous êtes impliqué (associations…) :</span>
                <textarea placeholder="Description" value={activiteParaPro} onChange={e=>setActiviteParaPro(e.target.value)} style={{height:'20vh'}}/>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
      case 5:
      return (
        <div className='conteneur'>
        <div className="container1">
        <div className="title">Candidature</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
            <div className="input-box">
                <span className="details">Niveau à candidater</span>
                <select name="Niveau à candidater" onChange={e=>{setNiveauCandidater(e.target.value)}} style={{
                            width: '100%',
                            height: '45px',
                            minWidth: '15ch',
                            maxWidth: '30ch',
                            border: '1px solid #ccc',
                            borderRadius: '0.25em',
                            padding: '0.25em 0.5em',
                            fontSize: '15px',
                            cursor: 'pointer',
                            lineHeight: '1.1',
                            backgroundColor: '#fff',
                            backgroundImage: 'linear-gradient(to top, #f9f9f9, #fff 33%)'
                }}>
                  <option value="N/A">N/A</option>
                  <option value="L1">L1</option>
                  <option value="L2">L2</option>
                  <option value="L3">L3</option>
                  <option value="M1">M1</option>
                  <option value="M2">M2</option>
                </select>
        </div>
        <div className="input-box">
                <span className="details">Parcours</span>
                <select name="Choix de parcours" onChange={e=>{setParcours(e.target.value)}} style={{
                            width: '100%',
                            height: '45px',
                            minWidth: '15ch',
                            maxWidth: '30ch',
                            border: '1px solid #ccc',
                            borderRadius: '0.25em',
                            padding: '0.25em 0.5em',
                            fontSize: '15px',
                            cursor: 'pointer',
                            lineHeight: '1.1',
                            backgroundColor: '#fff',
                            backgroundImage: 'linear-gradient(to top, #f9f9f9, #fff 33%)'
                }}>
                  <option value="N/A">N/A</option>
                  <option value="Réseau et système">Réseau et système</option>
                  <option value="Intégration et développement">Intégration et développement</option>
                  <option value="Choix non fixé"> Choix non fixé</option>
                </select>
        </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      )
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  ///////////////////////////////////////////////////////////////////////
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [dateDeNaissance, setDateDeNaissance] = useState(Date)
  const [lieuDeNaissance, setLieuDeNaissance] = useState('')
  const [nationalite, setNationalite] = useState('')
  const [situationFamiliale, setStatus] = useState('')
  const [nombreEnfant, setNbrEnfant] = useState('')
  const [personnalAdress, setPersonnalAdress] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [genre, setGenre] = useState('')
  
  /////////////////////////////////////////////////////////////////////
  const [nomPere, setNomPere] = useState('')
  const [telephonePere, setTelephonePere] = useState('')
  const [professionPere, setProfessionPere] = useState('')
  const [emailPere, setEmailPere] = useState('')
  const [nomMere, setNomMere] = useState('')
  const [telephoneMere, setTelephoneMere] = useState('')
  const [professionMere, setProfessionMere] = useState('')
  const [emailMere, setEmailMere] = useState('')
  const [nomTuteur, setNomTuteur] = useState('')
  const [telephoneTuteur, setTelephoneTuteur] = useState('')
  const [professionTuteur, setProfessionTuteur] = useState('')
  const [emailTuteur, setEmailTuteur] = useState('')

///////////////////////////////////////////File to upload//////////////////////////////////////////////////
  const [selectedDiplome, setSelectedDiplome] = useState(null)
  const [selectedReleveDeNoteBacc,setSelectedReleveDuBacc] = useState(null)
  const [selectedReleveDeNoteSeconde,setSelectedReleveDeNoteSeconde] = useState(null)
  const [selectedReleveDeNotePremiere,setSelectedReleveDeNotePremiere] = useState(null)
  const [selectedReleveDeNoteTerminale,setSelectedReleveDeNoteTerminale] = useState(null)
  const [certificatDeResidance,setCertificatDeResidence] = useState(null)
  const [selectedPhoto,setSelectedPhotoIdentite] = useState(null)
  const [selectedCINorCIS,setSelectedCINorCIS] = useState(null)
  const [cv,setCV] = useState(null)
  const [bordereauEsti,setBordereauEsti] = useState(null)

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const [nbrStage,setNbrStage] = useState('')
  const [entrepriseStage,setEntrepriseStage] = useState('')
  const [nbrAlternance,setNbrAlternance] = useState('')
  const [entrepriseAlternance,setEntrepriseAlternance] = useState('')
  const [autreActivitePro,setAutreActivitePro] = useState('')

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const [travauxPerso,setTravauxPerso] = useState('')
  const [activiteParaPro,setActiviteParaPro] = useState('')

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const [niveauCandidater,setNiveauCandidater] = useState('')
  const [parcours,setParcours] = useState('') 
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setGenre(target.value);
    }
 };
 const handlesubmit = async (e) => {
  e.preventDefault()
 /* console.log(
    {
      nom, 
      prenom, 
      dateDeNaissance, 
      lieuDeNaissance, 
      nationalite, 
      nbrEnfant,
      status,
      personnalAdress,
      telephone, 
      email,
      genre,

      nomPere,
      telephonePere,
      professionPere,
      emailPere,
      nomMere,
      telephoneMere,
      professionMere,
      emailMere,
      nomTuteur,
      telephoneTuteur,
      professionTuteur,
      emailTuteur,

      selectedDiplome,
      selectedReleveDeNoteBacc,
      selectedReleveDeNoteSeconde,
      selectedReleveDeNotePremiere,
      selectedReleveDeNoteTerminale,
      certificatDeResidence,
      selectedPhoto,
      selectedCINorCIS,
      cv,
      bordereauEsti,

      nbrStage,
      entrepriseStage,
      nbrAlternance,
      entrepriseAlternance,
      autreActivitePro,

      travauxPerso,
      activiteParaPro,
  
      niveauCandidater,
      parcours
    }
  )*/
  /*
  console.log({
    niveauCandidater,
    parcours
  })*/
  /*console.log({
    travauxPerso,
    activiteParaPro
 })*/
  /*console.log({
    nbrStage,
    entrepriseStage,
    nbrAlternance,
    entrepriseAlternance,
    autreActivitePro
  })*/
  /*
  console.log(
    selectedDiplome,
    selectedReleveDeNoteBacc,
    selectedReleveDeNoteSeconde,
    selectedReleveDeNotePremiere,
    selectedReleveDeNoteTerminale,
    certificatDeResidence,
    selectedPhoto,
    selectedCINorCIS,
    cv,
    bordereauEsti)*/
  /*console.log({
              nom, 
              prenom, 
              dateDeNaissance, 
              lieuDeNaissance, 
              nationalite, 
              nbrEnfant,
              status,
              personnalAdress,
              telephone, 
              email,
              genre,
              nomPere,
              telephonePere,
              professionPere,
              emailPere,
              nomMere,
              telephoneMere,
              professionMere,
              emailMere,
              nomTuteur,
              telephoneTuteur,
              professionTuteur,
              emailTuteur,
              selectedDiplome
              })*/
              const formData = new FormData(); 
              formData.append("nom", nom)
              formData.append("prenom", prenom)
              formData.append(" dateDeNaissance",  dateDeNaissance)
              formData.append("lieuDeNaissance", lieuDeNaissance)
              formData.append("nationalite, ", nationalite, )
              formData.append("nbrEnfant,", nombreEnfant,)
              formData.append("status", situationFamiliale)
              formData.append("personnalAdress", personnalAdress)
              formData.append("telephone", telephone)
              formData.append("email", email)
              formData.append("genre", genre)
              formData.append("selectedDiplome", selectedDiplome)
              formData.append("selectedReleveDeNoteBacc", selectedReleveDeNoteBacc)
              formData.append(" selectedReleveDeNoteSeconde",  selectedReleveDeNoteSeconde)
              formData.append("selectedReleveDeNotePremiere", selectedReleveDeNotePremiere)
              formData.append("selectedReleveDeNoteTerminale", selectedReleveDeNoteTerminale)
              formData.append("certificatDeResidance", certificatDeResidance)
              formData.append("selectedPhoto,", selectedPhoto,)
              formData.append("cv", cv)
              formData.append("bordereauEsti", bordereauEsti)
                // Update the formData object 
                const res = await axios({
                  method: "post",
                  url: "http://localhost:8000/api/candidats",
                  data: formData,
                  //headers: {'Content-Type': 'multipart/form-data' }
                });
                if(res.status === 200){
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Nice',
                  })
                }
                else{
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
                }
    
}
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep, nom, setNom,prenom, setPrenom, dateDeNaissance, setDateDeNaissance,
                                lieuDeNaissance, setLieuDeNaissance,
                                nationalite, setNationalite,situationFamiliale, setStatus,
                                nombreEnfant, setNbrEnfant,
                                personnalAdress, setPersonnalAdress,
                                email, setEmail,
                                telephone, setTelephone,
                                genre, setGenre,handleChange,

                                nomPere, setNomPere,
                                telephonePere, setTelephonePere,
                                professionPere, setProfessionPere,
                                emailPere, setEmailPere,

                                nomMere, setNomMere,
                                telephoneMere, setTelephoneMere,
                                professionMere, setProfessionMere,
                                emailMere, setEmailMere,

                                nomTuteur, setNomTuteur,
                                telephoneTuteur, setTelephoneTuteur,
                                professionTuteur, setProfessionTuteur,
                                emailTuteur, setEmailTuteur,

                                setSelectedDiplome,
                                setSelectedReleveDuBacc,
                                setSelectedReleveDeNoteSeconde,
                                setSelectedReleveDeNotePremiere,
                                setSelectedReleveDeNoteTerminale,
                                setCertificatDeResidence,
                                setSelectedCINorCIS,
                                setSelectedPhotoIdentite,
                                setCV,
                                setBordereauEsti,

                                nbrStage,setNbrStage,
                                entrepriseStage,setEntrepriseStage,
                                nbrAlternance,setNbrAlternance,
                                entrepriseAlternance,setEntrepriseAlternance,
                                autreActivitePro,setAutreActivitePro,

                                travauxPerso,setTravauxPerso,
                                activiteParaPro,setActiviteParaPro,

                                setNiveauCandidater,
                                setParcours   

                                )}</form>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{marginBottom:'20px',marginLeft:'5px'}}
          >
            back
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={activeStep === steps.length - 1 ? true : false}
            onClick={handleNext}
            //onClick={()=>{handleNext(); handlesubmit()}}
            style={{marginBottom:'20px'}}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={activeStep === steps.length - 1 ? false : true}
            onClick={handlesubmit}
            style={{marginBottom:'20px',marginLeft:'5px'}}
          >
            submit
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
