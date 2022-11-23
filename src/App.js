import './App.css'
import Header from './Header';
import Aside from './Aside';
import Sectionppal from './Sectionppal';
import Footer from './footer';
import {useState, useEffect} from 'react'
import axios from 'axios';


function App() {
    const fecha= new Date();
    let today=  fecha.toISOString().slice(0,10)
  const sectionToday = `https://newsapi.org/v2/everything?language=es&q=vegano&from=${today}&sortBy=popularity&pageSize=6&page=1&apiKey=04e697390c9849a4b79d5bc472c90f80`
  // const sectionEsp = `https://newsapi.org/v2/everything?language=es&q=veganoANDespaña&pageSize=6&page=1&apiKey=04e697390c9849a4b79d5bc472c90f80`
  const  sections= ["Hoy", "España", "Latinoamérica", "Alimentacion", "Moda", "Deportes", "Activismo"]


  const [sectionA, setSectionA]= useState([])
  const [sectionMain, setSectionMain ]= useState(sectionToday)
  const [sectionData, setSectionData]= useState([]);

  const getDataA = async () => {
    const resp = await axios.get('https://newsapi.org/v2/everything?language=es&q=vegan&sortBy=popularity&pageSize=4&page=1&apiKey=04e697390c9849a4b79d5bc472c90f80');
    setSectionA(resp.data);
    console.log(resp.data.articles)
  }
  const getDataMain = async () => {
    const resp = await axios.get(sectionMain);
    setSectionData(resp.data.articles);
    console.log(resp.data.articles)
  }

  useEffect(()=> { getDataA(); getDataMain()}, [sectionMain])


 
function newPpal(titulo) {
  setSectionMain(`https://newsapi.org/v2/everything?language=es&q=${titulo}&sortBy=popularity&pageSize=6&page=1&apiKey=04e697390c9849a4b79d5bc472c90f80`)
  }



  return (
    <div className="main">
      <div>
      <Header sections={sections} onclick={(a)=>newPpal(a)}/>
      </div>
      <div className='body'>
        <div className='bodymain'>
          {sectionData?.map((a) => <Sectionppal title={a.title} description={a.description} img={a.urlToImage} url={a.url} />)}
        </div>
        <Aside newsrec={sectionA.articles}/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
