import React,{ useState, useRef } from "react";
import styled, {css} from "styled-components";
import {MdDelete, MdAdd} from 'react-icons/md';
import {createPost, usePostsDispatch} from "./PostContext";

const CircleButton = styled.button`
background : #38d9a9;
&: hover {
    background : #63e6be;
}
&: active {
    background : #20c997;
}
z-index : 10;
cursor : pointer;
width : 50px;
height : 50px;
display : flex;
justify-content : center;
align-items : center;
position : fixed;
left : 50%;
top : 670px;
transform : translate(-50%, 50%);
font-size : 60px;
color : white;
border-radius : 40px;
border : none;
outline : none;
transition : 0.125s all ease-in;
    ${props=>props.open && css`
        background : #ff6b6b;
        &:hover {
            background : #ff8787;
        }
        &:active {
            background : #fa5252;
        }
        transform : translate(-50%,50%) rotate(45deg);
    `}
`;

const MakePostBlock = styled.div`
    position : fixed;
    z-index : 4;
    top : 600px;
    left : 50%;
    transform : translate(-50%, 50%);
    display : flex;
    align-item : center;
    justify-content : center;
    .title {
        width : 520px;
        padding : 10px 5px;
        outline : none;
        border : 1px solid ;
        border-radius : 4px;
    }
    .content {
        
    }
`;

const InsertForm = styled.div`
    width : 600px;
    height : 225px;
    border-radius : 16px;
    border : 3px solid black;
    padding : 10px;
    p {
        margin : 0;
        padding : 0;
    }
    button {
        float : right;
        padding : 8px;
    }
`;


function PostCreate() {
    const state = [
        {
            id : null,
            title : null,
            body : null
        }
    ]

    // console.log(state);
    const [open, setOpen] = useState(false);
    const dispatch = usePostsDispatch();

    const onToggle=()=>{
        setOpen(!open);
    }
    const onChangeTitle=(k)=>{
        state.title=k.target.value;
        // console.log(k.target.value);
    }
    const onChangeContent=(e)=>{
        state.body = e.target.value;
        // console.log(state.body);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        createPost(dispatch, state.title, state.body);
        setOpen(false);
    }

    return (
        <>
            <MakePostBlock>
                {open && (
                    <InsertForm>
                        <p>
                            T I T L E  <input 
                            className="title"
                            placeholder="title을 입력해주세요."
                            autoFocus
                            onChange={onChangeTitle}
                            />
                        </p>
                        C O N T E N T  
                        <textarea
                        className="content"
                        placeholder="content를 입력해주세요."
                        onChange={onChangeContent}
                        cols = "76" rows = "8"
                        />
                        <button type="button" onClick={onSubmit}>제 출</button>
                    </InsertForm>

                )}
            </MakePostBlock>
            <CircleButton open={open} onClick={onToggle}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default PostCreate;