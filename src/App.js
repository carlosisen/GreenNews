import './App.css'
import Header from './Header';
import Aside from './Aside';
import Sectionppal from './Sectionppal';
import Footer from './footer';
import Callings from './Callings';
import {useState, useEffect} from 'react'
import axios from 'axios';


function App() { 
  const apiKey = process.env.REACT_APP_API_KEY
  const  sections= ["Hoy", "España", "Latinoamérica", "Alimentacion", "Moda", "Deportes", "Activismo"]
  const [titleS, setTitleS] = useState("Hoy")
  const [sectionA, setSectionA]= useState([])
  const [sectionMain, setSectionMain ]= useState(Callings(titleS))
  const [sectionData, setSectionData]= useState([]);
  const [page, setPage ]= useState(0);



  const getDataA = async () => {
    const resp = await axios.get(`https://newsapi.org/v2/everything?language=es&q=vegan&sortBy=popularity&pageSize=4&page=1&apiKey=${apiKey}`);
    setSectionA(resp.data);
    console.log(resp.data.articles)
  }
  const getDataMain = async () => {
    const resp = await axios.get(sectionMain);
    setSectionData(resp.data.articles);
    console.log(resp.data.articles)
  }
  useEffect(() => {getDataA()}, [])
  useEffect(()=> { getDataMain()}, [sectionMain])



 
function newPpal(titulo) {
  setSectionMain(Callings(titleS))
  setPage(0)
  setTitleS(titulo)
  }


  return (
    <div className="main">
      <div>
      <Header sections={sections} onclick={(a)=>newPpal(a)}/>
      </div>
      <div className='body'>
        <div className='bodymain'>
          <Sectionppal payload={sectionData} page={page} title={titleS}/>
          <div className='pages'>
            <span className='arrow'><ion-icon name="caret-back-outline" onClick={page=== 0 ? "" : ()=> setPage(page-1) } ></ion-icon></span> 
            <span> {page+1} </span> 
            <span className='arrow' > <ion-icon name="caret-forward-outline" onClick={page== (sectionData.length/6)-1 ? "" : ()=> setPage(page+1)} ></ion-icon></span> 
          </div>
        </div>
        <Aside newsrec={sectionA.articles}/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
