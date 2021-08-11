import React from 'react'
import { Search } from './search';
import backTOHome from '../logoHome.png';
import { Link } from "react-router-dom";

const Description = (props) => {
    return (    
        <div>
          
            <Search/>
            <Link to="/"><img src={backTOHome} className="image" style={{width:"100px"}} alt=""/></Link> 
            <h1>{props.location.Props.name}</h1>
            <p>{props.location.Props.description}</p>
            </div>
    )
}

export default Description;