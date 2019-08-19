import React from 'react';
import Button from '../components/Button';
import "./style.scss";

const Home = () =>  {
  return (
    <section className="section-home" id="home">
      <div className='row'>
        <div className='col'>
          <div className="box-content">
             <h2 className='heading-primary'>Fresh Life</h2>
             <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             <Button text="Get free now"/>
          </div>
        </div>
        <div className='col'>
          <div className='picture' />
        </div>
      </div>
    </section>
  );
}

export default Home;