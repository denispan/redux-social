import React from 'react';
import styles from './index.module.scss';
import {classNames} from '../../../helpers/class-names';

interface Props {
  className?: string;
}

const Header = ({className = ""}) => {
  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.wrapper}>
        <p>Logo</p>
        <p>Login</p>
      </div>
    </header>
  );
};

export default Header;
