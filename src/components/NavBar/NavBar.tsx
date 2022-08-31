import React from 'react';
import { Link } from 'gatsby';
import './NavBar.scss';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaRegWindowClose } from 'react-icons/fa';
import { toggleOpen } from './index';
type Props = {};

const NavBar = (props: Props) => {
  React.useEffect(() => {
    window.addEventListener('resize', function () {
      const overlay = document.getElementById('overlay');
      const check = !overlay?.classList.contains('hidden');
      const { innerWidth } = window;
      if (innerWidth > 768 && check) {
        toggleOpen();
      }
    });
  });

  return (
    <>
      <nav className='navigation row-between'>
        <span className='navigation__brand'>Bright Devs</span>
        <ul className='navigation__list row-around'>
          <li className='navigation__list__item'>
            <Link
              activeClassName='active'
              to='/'
              className='navigation__list__item__link'
            >
              Home
            </Link>
          </li>
          <li className='navigation__list__item'>
            <Link
              activeClassName='active'
              to='/about'
              className='navigation__list__item__link'
            >
              About
            </Link>
          </li>
          <li className='navigation__list__item'>
            <Link
              activeClassName='active'
              to='/contact'
              className='navigation__list__item__link'
            >
              Contact
            </Link>
          </li>
        </ul>
        <HiMenuAlt3 className='navigation__open__icon' onClick={toggleOpen} />
      </nav>
      <div id='overlay' className='overlay column-between hidden '>
        <div className='width-full  row-end'>
          <FaRegWindowClose
            onClick={toggleOpen}
            className='overlay__close__icon'
          />
        </div>
        <ul className='navigation__list column-center'>
          <li className='navigation__list__item'>
            <Link
              activeClassName='active'
              to='/'
              className='navigation__list__item__link'
            >
              Home
            </Link>
          </li>
          <li className='navigation__list__item'>
            <Link
              activeClassName='active'
              to='/about'
              className='navigation__list__item__link'
            >
              About
            </Link>
          </li>
          <li className='navigation__list__item'>
            <Link
              activeClassName='active'
              to='/contact'
              className='navigation__list__item__link'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default NavBar;
