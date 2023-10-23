import React, {FC} from 'react';
import styles from './index.module.scss';
import {IPost} from '../../redux/posts/types';
interface PostItemProps {
  post: IPost
}

const Post: FC<PostItemProps> = ({post}) => {
  return (
    <div className={styles.container}>
      <p>{post.body}</p>
      <p>Лайки ❤️ {post.reactions}</p>
      <p>Теги: {post.tags.join(", ")}</p>
      <p>ID автора поста: {post.userId}</p>
    </div>
  );
};

export default Post;
