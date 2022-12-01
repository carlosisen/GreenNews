import News from "./News"
function Sectionppal(props){
    
    return (
        <>
        <div className="sectiontitle">{props.title}</div>
         {props.payload?.slice(6*props.page,6*(props.page+1) ).map( (a) => <News title={a.title} description={a.description} img={a.urlToImage} url={a.url} />)}
         
        </>

    )


}


export default Sectionppal