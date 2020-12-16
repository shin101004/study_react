import React,{useState, useEffect, useReducer} from 'react';
import axios from 'axios';

function reducer(state, action) {
    switch(action) {
        case 'LOADING' :
            return {
                loading : true,
                data:null,
                error : null
            }
        case 'SUCCESS' :
            return {
                loading : false,
                data : action.data,
                error : null
            }
        case 'ERROR' : 
            return {
                loading : false,
                data : null,
                error : action.error
            }
        default :
            throw new Error(`Un handled action type : ${action.type}`);
    }
}

function Users() {
    const [state,dispatch] = useReducer(reducer, {
        laoding : false,
        data : null,
        error : null
    });
    
    // componentsDidMount + componentsDidUpdate + compoenetsWillUnmount
    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchUsers = async () => {
        dispatch({type:"LOADING"});
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
            dispatch({type:"SUCCESS", data:response.data});
        } catch (e) {
            dispatch({type:"ERROR", error : e});
        }
    };

    const {loading, users, error} = state;

    if(loading) return <div>로딩 중 .. </div>
    if(error) return <div>에러가 발생했습니다 ..</div>
    if(!users) return null;

    return <ul>
        {users.map(user=>(
            <li key={user.id}>
                {user.username} ({user.name});
            </li>
        ))}
    </ul>
}

export default Users;