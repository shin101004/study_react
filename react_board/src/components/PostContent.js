import React, { useEffect } from 'react';
import { getPost, usePostsState, usePostsDispatch } from './PostContext';

function PostContent({id}) {
    const state = usePostsState();
    const dispatch = usePostsDispatch();

    useEffect(()=>{
        getPost(dispatch,id);
    },[dispatch,id]);

    const {data:post, error} = state.post;

    if(error) return <div>에러 입니다.</div>
    if(!post) return null;

    return (
        <div>
            <h2>Post ID : {post.id}</h2>
            <span>{post.body}</span>
        </div>
    )
}

export default PostContent;