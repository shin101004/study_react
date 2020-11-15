import React from 'react';

function Hello({color,name,isSpecial}){
    // console.log(props.name);
    // const style={
    //     backgroundColor : 'black',
    //     color:'aqua',
    //     fontSize :24,
    //     padding :10
    // }
    return(
        <>
            <div style={{color:color}}>
                {isSpecial && <b>*</b>}
                안녕하세요.
                {name}
            </div>
            {/* // 태그는 꼭 닫혀있어야한다.
            // 2개 이상의 태그는 꼭 하나의 태그로 갇혀있어여한다.
            // <></>라는 fragment라는 태그 사용 가능 */}
        </>
    );
}

Hello.defaultProps ={
    name :"이름없음"
};

export default Hello;