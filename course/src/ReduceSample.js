import React,{useReducer} from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'DECREASE' : 
            return {count : state.count-1};
        case 'INCREASE' :
            return {count : state.count+1};
        default :
            throw new Error();
    }
}

const initial = {count:0};

function ReduceSample() {
    const [state, dispatch] = useReducer(reducer,initial);
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type:'INCREASE'})}>+1</button>
            <button onClick={()=>dispatch({type:"DECREASE"})}>-1</button>
        </>
    )
}

export default ReduceSample;