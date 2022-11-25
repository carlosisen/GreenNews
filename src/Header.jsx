import Headcomp from "./Headcomp"
function Header(props){

let sections= props.sections

return(

    
    <div className="header">
        <div className="headerimg"></div>
        <section className="textup">
        <div className="headerimg2"> 
                <img src="https://images.gutefrage.net/media/fragen/bilder/ist-das-das-vegetarische-zeichen-/0_big.jpg?v=1483441962000" alt="logo" height="70px" ></img><h1>GreenNews</h1>
        </div>
        <h4 id="lema" >Tu enlace a un futuro sostenible</h4>
        <div className="headbuttons">
            {sections.map((section) => <Headcomp titulo= {section} onclick={props.onclick} />)}


        </div>
        </section>
            
    </div>
)

}

export default Header