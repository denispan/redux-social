import React, {useState} from 'react';
import styles from './index.module.scss';
import {Action} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {selectPostsData} from '../../redux/posts/selectors';
import {selectUserData} from '../../redux/user/selectors';
import {fetchPosts} from '../../redux/posts/asyncActions';
import {fetchUser} from '../../redux/user/asyncActions';
import {useNavigate} from 'react-router-dom';
import {routes} from '../../helpers/routes';

const Auth = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  // const { user, status } = useSelector(selectUserData);


  const onSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (usernameInput === "vniir" && passwordInput === "12345") {
      dispatch(
        fetchUser({username: "atuny0", password: "9uQFF1Lh"}),
      );
      navigate(routes.posts)
    } else {
      alert("Введены неверные данные для авторизации")
    }
  }


  //   loginQuery(usernameInput, passwordInput)
  //     .then((res) => {
  //       res.request.status === 200
  //         ? onSuccessLogin(res)
  //         : alert('неверные данные');
  //     })
  //     .catch((err) => {
  //       alert('Данные введены с ошибкой');
  //       console.log(err);
  //     });
  // };



  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Авторизация</h1>
          <form
            className={styles.form}
            onSubmit={onSubmitLogin}
          >
          <div className={styles.field}>
            <label htmlFor="username">Имя</label>
            <input
              onChange={(e) => setUsernameInput(e.target.value)}
              value={usernameInput} className={styles.input}
              id="username"
              type="text"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Пароль</label>
            <input
              value={passwordInput}
              id="password"
              type="password"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.btn}>
            Войти
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
