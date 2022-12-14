/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia, Languages, skills } from './Data';
import mePicture from '../assets/about-me-picture1.AVIF';

export default function About() {
  return (
    <section id="About" className="container-fluid w-full h-auto px-4 md:px-16 lg:px-32 py-16 md:pt-32 flex flex-col justify-center items-center bg-black">
      <div className="bg md:flex justify-between md:gap-6 md:mb-12">
        <div className="hidden wow slideInLeft md:flex about-me-picture-desktop md:w-6/12 md:h-72 md:bg-gray-600 rounded">
          <img src={mePicture} alt="Stanley SIMEON" className="w-full h-full object-cover rounded" />
        </div>
        <div className="md:w-full md:flex md:flex-col justify-start z-10 backdrop-blur-3xl backdrop-brightness-100 backdrop-opacity-90 p-0 md:backdrop-blur-0 md:-mt-2">
          <div className="flex flex-col justify-center md:justify-start md:items-start mb-8 md:mb-0 mt-8 md:mt-0">
            <span className="flex justify-start items-baseline text-6xl md:text-7xl font-normal md:font-bold">
              <h1 className="wow bounceInDown text-myPortfolio-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                About me
              </h1>
              <span className="text-orange-600 wow zoomInDown" data-wow-duration=".6s" data-wow-delay="1s">.</span>
            </span>
            <span className="w-32 md:hidden h-1 bg-myPortfolio-logo" />
          </div>
          <p className="wow bounceIn text-gray-400 text-start md:text-start text-md lg:text-xl font-light mt-6 md:mt-3">
            <strong>Self-taught Full-Stack Developer</strong>
            <br />
            <span className="text-green-500 md:p-1 rounded">
              Javascript | React & Redux | Ruby | Ruby on Rails | HTML/CSS
            </span>
            <br />
            I’m a software developer! I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
          </p>
          <span data-wow-iteration="1" className="wow bounceInRight w-full mt-4 uppercase hidden md:flex md:flex-col text-2xl text-myPortfolio-secondaryText">
            <h2>Let&#39;s connect</h2>
            <div className="flex justify-start items-center gap-4">
              {
                socialMedia.map((social) => (
                  <a href={social.link} target="_blank" rel="noreferrer" key={social.id}>
                    <FontAwesomeIcon icon={social.icon} size="2x" className="text-myPortfolio-white w-6 hover:animate-spin" />
                  </a>
                ))
              }
            </div>
          </span>
        </div>
      </div>
      <div className="marquee w-full hidden md:flex gap-4">
        {
          Languages.map((lang) => (
            <div key={lang.id} className="bounce flex w-full justify-between items-center animate-pulse">
              <img src={lang.logo} alt={lang.name} className="bounce text-myPortfolio-white md:w-14 lg:w-16 iconResize" />
            </div>
          ))
        }
        {
          skills.map((skill) => (
            <div key={skill.id} className="flex w-full justify-between items-center animate-pulse">
              <img src={skill.logo} alt={skill.name} className="bounce text-myPortfolio-white w-10 iconResize" />
            </div>
          ))
        }
      </div>
    </section>
  );
}
