import React, {useEffect} from 'react';


import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Post from '../Post';
import {useAppDispatch} from '../../redux/store';
import {selectPostsData} from '../../redux/posts/selectors';
import {selectUserData} from '../../redux/user/selectors';
import {fetchPosts} from '../../redux/posts/asyncActions';
import styles from './index.module.scss';

const PostContainer = () => {

  const dispatch = useAppDispatch();
  const { posts, status } = useSelector(selectPostsData);
  const { user } = useSelector(selectUserData);
  const navigate = useNavigate();

  const getPosts = async (token: string) => {
        dispatch(
      fetchPosts({token: user.token}),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPosts(user.token);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {status === 'loading' && <h1>Идет загрузка...</h1>}
        {status === 'error' && <h1>Ошибка загрузки постов</h1>}
        {posts &&
          posts.map(post =>
            <Post key={post.id} post={post}/>
          )
        }
      </div>
    </>
  );
};

export default PostContainer;
