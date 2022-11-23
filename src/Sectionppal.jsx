
function Sectionppal(props){

    return (
        <div className="sectionppal">
            <a href={props.url} target="_blank" className="sectionppala">
            <img className="ppalImgs" src={props.img} alt="foto" width="300px" />
            <section className="textnews"><h3>{props.title}</h3>
            <p>{props.description}...</p>
            </section>
            </a>
            </div>

    )


}


export default Sectionppal