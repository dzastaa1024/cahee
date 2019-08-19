import React from 'react';

const Item = ({label, href}) => {
  return (
    <a className="nav-item" href={href}>
        {label}
    </a>
  );
}

export default Item;