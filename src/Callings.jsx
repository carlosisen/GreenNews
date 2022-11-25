import {useState, useEffect} from 'react'
import axios from 'axios';

function Callings(props){
const apiKey = process.env.REACT_APP_API_KEY
const fecha = new Date();
let today = fecha.toISOString().slice(0, 10)
const sectionToday = `https://newsapi.org/v2/everything?language=es&q=${props}&from=${today}&sortBy=popularity&pageSize=36&page=1&apiKey=${apiKey}`




return(
    sectionToday
)
}
export default Callings