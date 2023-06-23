import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";
import {BiBadgeCheck} from "react-icons/bi"
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
<h3> Frontend Development</h3>
<div className="experience_content">
  <article className="experience_details">
<BiBadgeCheck/>
<h4>HTML</h4>
<small className='text-light'>Experienced</small>
  </article>
  <article className="experience_details">
<BiBadgeCheck/>
<h4>CSS</h4>
<small className='text-light'>Intermediate</small>
  </article>
  <article className="experience_details">
<BiBadgeCheck/>
<h4>JavaScript</h4>
<small className='text-light'>Intermediate</small>
  </article>
  <article className="experience_details">
<BiBadgeCheck/>
<h4>Bootstrap</h4>
<small className='text-light'>Intermediate</small>
  </article>
  <article className="experience_details">
<BiBadgeCheck/>
<h4>React</h4>
<small className='text-light'>Intermediate</small>
  </article>
</div>
        </div>

        <div className="experience_backend">
        <h3> Graphic Designer</h3>
<div className="experience_content">
  <article className="experience_details">
<BiBadgeCheck/>
<h4>Adobe Photoshop</h4>
<small className='text-light'>Experienced</small>
  </article>
  <article className="experience_details">
<BiBadgeCheck/>
<h4>Adobe Illustrator</h4>
<small className='text-light'>Experienced</small>
  </article>
  <article className="experience_details">
<BiBadgeCheck/>
<h4>Adobe Indesign</h4>
<small className='text-light'>Experienced</small>
  </article>
  <article className="experience_details">
<BiBadgeCheck/>
<h4>Adobe Lightroom</h4>
<small className='text-light'>Experienced</small>
  </article>
  <article className="experience_details">
  </article>
</div>
        </div>
    
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
