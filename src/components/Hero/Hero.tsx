import React from 'react';
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';
import { StaticImage } from 'gatsby-plugin-image';
import './Hero.scss';
type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <section className='hero__content grid-col-span-2 p-1 column-center'>
        <span className='txt-xl uppecase txt-bold'>I'm Edgar</span>
        <h2 className='highlight'>A Full-Stack Web Developer</h2>
        <p className='txt-center lh-1'>
          Bright Devs is my personal portfolio site, where projects are shared
          and blogs are written. I am a web developer with{' '}
          <span className='fw-bold color-pink'>
            {new Date().getFullYear() - 2018} years
          </span>{' '}
          of professional experience. Specialized in developing and maintaining
          web applications using Ember, Node,{' '}
          <span className='fw-bold'>React</span>, Javascript, and{' '}
          <span className='fw-bold'>Typescript</span>. Dedicated lifelong
          enthusiast eager to learn from others. Excited to share my skill set
          by blogging. Thanks for stopping by. <span>ヽ(ヅ)ノ</span>
        </p>
        <div className='hero__content-links width-full row-center p-1'>
          <a
            className='txt-xl'
            href='/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiLinkedin />
          </a>
          <a
            className='txt-xl'
            href='/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiGithub />
          </a>
          <a
            className='txt-xl'
            href='/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiInstagram />
          </a>
        </div>
      </section>
      <figure className='hero__profile grid-col-span-2 p-1 column-center'>
        <StaticImage
          className='hero__profile-img'
          alt='edgar rojas'
          src='../../assets/profile.jpeg'
        />
      </figure>
    </>
  );
};

export default Hero;
