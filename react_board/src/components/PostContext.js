import React, { createContext, useReducer, useContext, Children} from "react";
import axios from "axios";

const initialState = {
    posts : {

    data : null,
    error : null
    },
    post : {
        data : null,
        error : null
    }
}
const success =(data)=>({

    data,
    error : null,
});

const error=(e)=>({
    data : null,
    error : e
})

export async function getPosts(dispatch) {
    dispatch({type:'GET_POSTS'});
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({type:'GET_POSTS_SUCCESS', data : response.data});
    } catch (e) {
        dispatch({type:'GET_POSTS_ERROR', error:e})
    }
}

export async function getPost({dispatch,id}) {
    dispatch({type:'GET_POST'});
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch({type:'GET_POST_SUCCESS', data : response.data});
    } catch (e) {
        dispatch({type:'GET_POST_ERROR', error:e})
    }
}

export function postsReducer(state, action) {
    switch(action.type) {
        case 'GET_POSTS' : 
            return {
                ...state
            }
        case 'GET_POSTS_SUCCESS' :
            return {
                ...state,
                posts : success(action.data)
            }
        case 'GET_POSTS_ERROR' :
            return {
                ...state,
                posts : error(action.error)
            }
        case 'GET_POST' :
            return {
                ...state,
            }
        case 'GET_POST_SUCCESS' :
            return {
                ...state,
                post : success(action.data)
            }
        case 'GET_POST_ERROR' :
            return {
                ...state,
                post : error(action.error)
            }
        default : {
            throw new Error(`Unhandled Error ${action.error}`);
        }
    }
}

const PostsStateContext = createContext(null);
const PostsDispatchContext = createContext(null);

export const PostsProvider=({children})=>{
    const [state, dispatch] = useReducer(postsReducer,initialState);

    return (
        <PostsStateContext.Provider value={state}>
            <PostsDispatchContext.Provider value={dispatch}>
                {children}
            </PostsDispatchContext.Provider>
        </PostsStateContext.Provider>
    )
}

export function usePostsState() {
    const state = useContext(PostsStateContext);
    if(!state) {
        throw new Error('Can not find PostProvider');
    }
    return state;
}

export function usePostsDispatch() {
    const dispatch = useContext(PostsDispatchContext);
    if(!dispatch) {
        throw new Error(`Unhandled Error ${dispatch}`);
    }
    return dispatch;
}