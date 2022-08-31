import React from 'react';
import './Footer.scss';
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='footer column-between grid-col-span-4'>
      <h1>Bright Devs</h1>
      <p> © {new Date().getFullYear()} Bright Devs. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
