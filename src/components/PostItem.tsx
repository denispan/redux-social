import React, {FC} from 'react';
import {IPost} from '../redux/posts/types';

interface PostItemProps {
  post: IPost
}

const PostItem: FC<PostItemProps> = ({post}) => {
  return (
    <>
      <div>
        {post.id} {post.body}
      </div>
    </>
  );
};

export default PostItem;
