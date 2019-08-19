import React from 'react';
import {FaCartArrowDown, FaCarrot, FaGlobeEurope, FaFish} from "react-icons/fa";
import Service from './Service';
import "./style.scss";


const Services = () =>  {
  return (
    <section className="section-services" id="services">
      
      <div className='row'>
        <div className='col'>
          <div className="box-content">
            <Service text='Online Shopping' icon={<FaCartArrowDown/>}/>
            <Service text='Quality Product'icon={<FaCarrot/>}/>
            <Service text='Domestic and International Delivery' icon={<FaGlobeEurope/>}/>
            <Service text='Well Organized' icon={<FaFish/>}/>
          </div>
        </div>
        <div className='col'>
          <div className='picture'>
            <h2 className='heading-primary'>Our Services</h2>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;