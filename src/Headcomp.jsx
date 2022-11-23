


function Headcomp(props){
    
    return( 
        <div className="headcomp" onClick={()=>props.onclick(`${props.titulo}`)}>
            <p>{props.titulo}</p>
        </div>
    )
}

export default Headcomp