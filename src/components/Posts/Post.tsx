import React, { useContext } from 'react';
import useStyles from './Post.style';
import PostContext from '../../PostContext';

const Post = () => {
  const { postName, setPostName } = useContext(PostContext);

  return (
    <div>
      Test
    </div>
  );
}

export default Post;