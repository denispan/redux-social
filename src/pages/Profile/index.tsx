import React from 'react';
import styles from './index.module.scss';
import {selectUserData} from '../../redux/user/selectors';
import {useSelector} from 'react-redux';
import {dateRevert} from '../../helpers/dateRevert';

const Profile = () => {
  const { user } = useSelector(selectUserData);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Личный кабинет</h1>
          <div className={styles.user_info}>
            <img className={styles.user_avatar} src={user.image} alt="avatar"/>
            <p><b>ФИО: </b>{`${user.lastName} ${user.firstName} ${user.maidenName}`}</p>
            <p><b>Email: </b>{`${user.email}`}</p>
            <p><b>Дата рождения: </b>{`${dateRevert(user.birthDate)}`}</p>
          </div>



        </div>
      </div>
    </>
  );
};

export default Profile;
