import React from 'react';
import Item from './components/Item';
import './styles.scss';

const Header = () => {
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
    <header className="header">
     <h4 className="header__title">Cahee</h4>
     <nav className="header__navigation">
         {items.map(item => <Item key={item.label} label={item.label} href={item.href}/>)}
     </nav>
    </header>
  );
}

export default Header;
