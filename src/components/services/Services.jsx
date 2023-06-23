import React from 'react';
import './services.css';
import ListServices from './listServices';
import {FiCheckCircle} from 'react-icons/fi'

export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
       <article className="service">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>User interface</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>mobile interface</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>Website interface</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>Figma</p>
          </li>
        </ul>
        </article>
        <article className="service">
        <div className="service_head">
          <h3>Graphic Designer</h3>
        </div>
        <ul className="service_list">
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>Adobe Photoshop</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p></p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>Adobe Illustrator</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>Adobe Indesign</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>Lightroom</p>
          </li>
        </ul>
        </article>  
        <article className="service">
        <div className="service_head">
          <h3>Web Development</h3>
        </div>
        <ul className="service_list">
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>html</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>CSS</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>Javascript</p>
          </li>
          <li>
            <FiCheckCircle className='service_list-icon'/>
            <p>React js</p>
          </li>
        </ul>
        </article>  
      </div>
    </section>
  );
}
export default Services;