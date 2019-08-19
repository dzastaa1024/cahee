import React from 'react';
import "./style.scss";

const Button = (props) => {
    return (
        <a href="#" className="btn">{props.text}</a>
    )
}

export default Button;