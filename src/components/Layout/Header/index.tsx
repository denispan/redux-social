import React from 'react';
import styles from './index.module.scss';
import {classNames} from '../../../helpers/class-names';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData} from '../../../redux/user/selectors';
import {Link, useNavigate} from 'react-router-dom';
import {logoutUser} from '../../../redux/user/slice';

const Header = ({className = ""}) => {
  const { user} = useSelector(selectUserData);
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatcher(logoutUser());
    navigate('/auth');
  }

  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.wrapper}>
        <Link to="/posts">На главную</Link>
        {user.firstName ? (
          <div className={styles.user_info}>
            <Link to="/profile">
              <div className={styles.login}>
                <img className={styles.avatar} src={user.image} alt="avatar"/>
                <span className={styles.name}>{user.firstName}</span>
              </div>
            </Link>
            <button className={styles.btn} onClick={() => logOut()}>
              Выйти
            </button>
          </div>

        ) : <p>Вы не авторизованы</p>}
      </div>
    </header>
  );
};

export default Header;
