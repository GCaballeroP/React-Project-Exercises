import React from 'react';

const Imagenes = (props) => {
    return (
        <div>
            <img src={require(`../img/${props.image}.png`)} alt= {props.alt} />
            
        </div>
    );
}

export default Imagenes;