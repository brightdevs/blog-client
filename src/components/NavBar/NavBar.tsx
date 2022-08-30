import React from 'react';
import { Link } from 'gatsby';
import './NavBar.scss';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaRegWindowClose } from 'react-icons/fa';
type Props = {};

const NavBar = (props: Props) => {
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
        <HiMenuAlt3
          className='navigation__open__icon'
          onClick={() => {
            // get element by class overlay and toggle it's display property
            const overlay = document.querySelector('.overlay');
            overlay?.classList.toggle('hidden');
          }}
        />
      </nav>
      <div className='overlay column-between hidden '>
        <div className='width-full  row-end'>
          <FaRegWindowClose
            onClick={() => {
              const overlay = document.querySelector('.overlay');
              overlay?.classList.toggle('hidden');
            }}
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
