import React, { useEffect } from 'react';
import { getPost, usePostsState, usePostsDispatch } from './PostContext';

function PostContent({id}) {
    const state = usePostsState();
    const dispatch = usePostsDispatch();

    useEffect(()=>{
        getPost(dispatch,id);
    },[])

    return (
        <div>
            
        </div>
    )
}

export default PostContent;