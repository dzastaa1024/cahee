import React from 'react';
import "./style.scss";

const Service = (props) => {
    return (
        <div className="service-box">
            <span className="service-box__text">{props.text}</span>
            <span className="service-box__icon">{props.icon}</span>
        </div>
    )
}

export default Service;