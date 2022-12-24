

function News(props){

    return (
    <div className="sectionppal">
        <a href={props.url} target="_blank" className="sectionppala">
            <img className="ppalImgs" src={props.img} alt="foto"/>
            <section className="textnews"><h3>{props.title}</h3>
                <p>{props.description}...</p>
            </section>
        </a>
    </div>
    
    )


}

export default News