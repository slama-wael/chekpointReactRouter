import React from 'react'
import { Search } from './search';
import { Link } from "react-router-dom";
import backTOHome from '../logoHome.png';
import ReactPlayer from 'react-player';

/*<iframe width="712" height="390" src={props.location.Props.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/

function Trailer(props) {

    return (
        <div>
           
        <Search/>
        <Link to="/"><img src={backTOHome} style={{width:"100px"}} className="image" alt="vdf"/></Link> 
        <h1>{props.location.Props.name}</h1>
        <ReactPlayer controls url = {props.location.Props.trailer} />
        
        </div>
        
    )
}

export default Trailer;