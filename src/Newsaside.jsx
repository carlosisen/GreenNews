


function Newsaside(props){

    return(
        <a href={props.url} target="_blank" className="newsaside">
            <img src={props.img} alt="foto" width="200px"/>
            <div className="newsaside__texts">
                <h5>{props.title}</h5>
                <p>{props.description.slice(0,100)}...</p>
            </div>
        </a>
    )


}

export default Newsaside