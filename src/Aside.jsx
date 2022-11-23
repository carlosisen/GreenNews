import Newsaside from "./Newsaside"



function Aside(props){
    let noticias = props.newsrec


    return(
        <aside className="aside">
            <div className="titleaside">
                <h4 id="titleaside"><i>Recomendamos</i></h4>
                
            </div>
        {noticias?.map( a=> <Newsaside title={a.title} description={a.description} img = { a.urlToImage } url={a.url}/>)}
        </aside>

    )

}

export default Aside