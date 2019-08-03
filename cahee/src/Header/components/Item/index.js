import React from 'react';

function Item({label, href} ) {
  return (
    <a className="Item" href={href}>
        {label}
     
    </a>
  );
}

export default Item;