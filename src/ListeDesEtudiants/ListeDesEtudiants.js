import ModelList from '../ModelList';
import useFetch from '../useFetch';
import './ListeDesEtudiants.css'

function ListeDesEtudiants() {
  const { error, isPending, data } = useFetch('http://localhost:8000/api/L1')

  return (
    <>
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
    {data &&< ModelList data={data}/>}
    </>
  );
}
export default ListeDesEtudiants