import React,{useState} from 'react';
import styled from "styled-components";
import Clock from "react-live-clock";

const PostHeaderBlock = styled.div`
padding : 10px 15px 10px 15px;
border-bottom : 2px solid #afafaf;
font-size : 30px;
h1 {
color : #aaa;
letter-spacing : 10px;
margin : 0;
font-size : 24px;
padding : 0 0 10px 0;
}

Clock {
  color : #a6a6a6;
   font-size : 30px;
}
`;

function PostHeader() {
    return (
        <PostHeaderBlock>
            <h1>게시판</h1>
            <Clock className="day" format={'HH:mm:ss'} ticking={true}/>
        </PostHeaderBlock>
    )
}

export default PostHeader;