


function Newsaside(props){

    return(
        <div className="newsaside">
        <a href={props.url} target="_blank">
            <img src={props.img} alt="foto" width="200px"/>
            <h5>{props.title}</h5>
            <p>{props.description.slice(0,100)}...</p>
        </a>
        </div>
    )


}

export default Newsaside