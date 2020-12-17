// import React,{ useState, useReducer, useEffect } from "react";
// import {getPosts, usePostsState, usePostsDispatch} from "./PostContext"
// import axios from "axios";
// import styled from "styled-components";

// const PostListBlock = styled.div`
// ul {
// background-color : #ffffff;
// color : black;
// list-style : none;
// padding : 0 5px;
// }

// ul li {
//     margin : 5px 0px;
//     border : 1px solid black;
//     border-radius : 4px;
//     padding : 3px 3px;
// }
// `;

// function PostList() {
//     const [id, setId] = useState(null);
//     const state = usePostsState();
//     const dispatch = usePostsDispatch();

//     const {loading, error, data:posts} = state.posts;

//     const fetchData=()=>{
//         getPosts(dispatch);
//     }
//     if(loading) return <div>로딩 중 .. </div>
//     if (error) return <div>에러가 발생했습니다 ..</div>
//     if (!posts) return <button onClick={dispatch}>눌러주세요</button>

//     return (
//         <>
//             <PostListBlock>
//                 <ul>
//                     {posts.map(post => (
//                         <li key={post.id} >
//                             <b>{post.title}</b>
//                         </li>
//                     ))}
//                     {/* {content && <PostContent id={content} />} */}
//                 </ul>
//             </PostListBlock>
//         </>
//     )
// }

// export default PostList;

import React,{ useState, useReducer, useEffect } from "react";
import {getPosts, usePostsState, usePostsDispatch} from "./PostContext"
import axios from "axios";
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
}
`;

function PostList() {
    const [id, setId] = useState(null);
    const state = usePostsState();
    const dispatch = usePostsDispatch();

    const {error, data:posts} = state.posts;

    useEffect(()=>{
        getPosts(dispatch);
    },[])
    if (error) return <div>에러가 발생했습니다 ..</div>
    
    
    return (
        <>
            <PostListBlock>
                <ul>
                    {posts ? 
                    posts.map(post => (
                        <li key={post.id} >
                            <b>{post.title}</b>
                        </li>
                    )) : undefined}
                    {/* {id && <PostContent id={id} />} */}
                </ul>
            </PostListBlock>
        </>
    )
}

export default PostList;