import React, {useEffect} from 'react';
import PostItem from './PostItem';
import {useAppDispatch} from '../redux/store';
import {useSelector} from 'react-redux';
import {selectPostsData} from '../redux/posts/selectors';
import {fetchPosts} from '../redux/posts/asyncActions';

const PostContainer = () => {

  const dispatch = useAppDispatch();
  const { posts, status } = useSelector(selectPostsData);

  const getPosts = async () => {
        dispatch(
      fetchPosts(),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div>
        {status === 'loading' && <h1>Идет загрузка...</h1>}
        {status === 'error' && <h1>Ошибка загрузки постов</h1>}
        {posts &&
          posts.map(post =>
            <PostItem key={post.id} post={post}/>
          )
        }
      </div>
    </>
  );
};

export default PostContainer;
