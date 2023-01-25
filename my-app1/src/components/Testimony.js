import React from 'react';
import '../css/testimony.css';

function Testimony(props) {
    
        return (
            <div className='contenedor-testimony'>
                <img className = 'img-testimony ' src={require(`../img/${props.image}.png`)} alt={props.alt} />
                
                <div className='contenedor-text-testimony'>
                    <p className='name-testimony'><strong>{props.name}</strong> in {props.country}</p>
                    <p className='cargo-testimony'>{props.office} at <strong>{props.company}</strong></p>
                    <p className='text-testimony'>"{props.testimony}"</p>
                </div>
            </div>
        );
    }

export default Testimony;