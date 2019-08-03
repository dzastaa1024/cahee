import React from 'react';
import Item from './components/Item';

function Header() {

    const items = [
        {
            label: 'Home',
            href: '#home'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Services',
            href: '#services'
        },
        {
            label: 'Gallery',
            href: '#gallery'
        },
        {
            label: 'Blog',
            href: '#blog'
        },
        {
            label: 'Contact',
            href: '#contact'
        },

    ]

  return (
    <div className="Header">
     <h4>Cahee</h4>
     <nav>
         {items.map(item => <Item label={item.label} href={item.href}/>)}
     </nav>
    </div>
  );
}

export default Header;
