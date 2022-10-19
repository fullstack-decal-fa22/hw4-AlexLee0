import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    const makePost = (newPost) => {
      setPosts([newPost, ...posts]);
    };
  
    return (
        <div>
            <Menu makePost = {makePost}></Menu>
            {posts.map((post) => (
                <Block color = {post} />
            ))}
        </div>
    );
}

export default Feed;