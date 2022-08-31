import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import '../styles/reset.scss';
import '../styles/utils.scss';
import '../styles/grid.scss';
import '../styles/fonts.scss';
import Footer from '../components/footer/Footer';
type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <NavBar />
      <main className={`grid ${className}`}>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  className: 'unstated',
};

export default Layout;
