import React from 'react';
import '../css/button.css'
function Button ({text,isButtonClick,touchClick}) {
    return (
        <button className= {isButtonClick ? 'button-click' : 'button-reset'} onClick={touchClick}>
            {text}
        </button>
    );
}

export default Button;
