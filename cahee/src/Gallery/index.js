import React from 'react';
import Button from '../components/Button';
import "./style.scss";

const Gallery = () => {
  return (
    <section className="section-gallery center" id="gallery">
      <h2 className='heading-primary center'>Gallery</h2>
      <p className='paragraph paragraph--center'>Lorem Ipsum the industry's when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="picture-box">
        <div className="pic pic--1"></div>
        <div className="pic pic--2"></div>
        <div className="pic pic--3"></div>
        <div className="pic pic--4"></div>
        <div className="pic pic--5"></div>
      </div>
      <Button text="VIEW MORE"/>
    </section>
  );
}

export default Gallery;