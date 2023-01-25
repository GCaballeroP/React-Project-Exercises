import React from 'react';

const Imagenes = (props) => {
    return (
        <div className='contenedor-imagenes'>
            <img src={require(`../img/${props.image}.png`)} alt= {props.alt} />
            
        </div>
    );
}

export default Imagenes;
