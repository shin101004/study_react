import React,{useEffect, useState } from "react";
import {getPosts, usePostsState, usePostsDispatch} from "./PostContext"
import PostContent from "./PostContent"
import styled from "styled-components";

const PostListBlock = styled.div`
ul {
background-color : #ffffff;
color : black;
list-style : none;
padding : 0 5px;
}

ul li {
    margin : 5px 0px;
    border : 1px solid black;
    border-radius : 4px;
    padding : 3px 3px;
    cursor : pointer;
}
ul li:hover {
    color : #2da772;
}
`;

function PostList() {
    const state = usePostsState();
    const dispatch = usePostsDispatch();

    const {error, data: posts} = state.posts;
    const [id,setId] = useState(null);

    useEffect(()=>{
        getPosts(dispatch);
    },[dispatch]);

    if (error) return <div>에러가 발생했습니다 ..</div>
    
    return (
        <>
            <PostListBlock>
                <ul>
                    {posts ? 
                    posts.map(post => (
                        <li key={post.id} onClick={()=>setId(post.id)}>
                            <b>{post.title}</b>
                        </li>
                    )) : undefined}
                    {id && <PostContent id={id} />}
                </ul>
            </PostListBlock>
        </>
    )
}

export default PostList;