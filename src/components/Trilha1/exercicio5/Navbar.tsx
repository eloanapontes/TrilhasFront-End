import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <a href="https://github.com/eloanapontes">git</a>
      <a href="https://www.linkedin.com/in/eloanapontes/">linkedin</a>
    </nav>
  );
};

export default Navbar;
