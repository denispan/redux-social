import React from 'react';
import styles from './index.module.scss';
import {classNames} from '../../../helpers/class-names';

interface Props {
  className?: string;
}

const Footer = ({className = ""}: Props) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      <div className={styles.wrapper}>
        <p>Contacts</p>
        <p>Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
