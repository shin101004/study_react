import React from 'react';
import styled from 'styled-components';
import { PostsProvider } from './PostContext';

const PostTemplateBlocks = styled.div`
    margin : 0 auto;
    width : 600px;
    height : 600px;
    padding : 10px;
    display : flex;
    position : relative;
    flex-direction : column;
    margin-top : 120px;
    border : 3px solid black;
    border-radius : 16px;
    overflow-y : scroll;
`

function PostTemplate({children}) {
    return (
        <PostsProvider>
            <PostTemplateBlocks>
                {children}
            </PostTemplateBlocks>
        </PostsProvider>
    )
}

export default PostTemplate;