import React from 'react';
import "./style.scss";


const About = () =>  {
  return (
    <section className="section-about" id="about">
      
      <div className='row'>
        <div className='col'>
          <div className='picture'></div>
        </div>
        <div className='col'>
          <div className="box-content">
             <h2 className='heading-primary heading-primary--light'>About Us</h2>
             <p className='paragraph paragraph--light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             <p className='paragraph paragraph--light'>Lorem Ipsum is simply dummy text of the printing and typesettin.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;