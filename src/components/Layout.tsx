import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import '../styles/reset.scss';
import '../styles/utils.scss';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
