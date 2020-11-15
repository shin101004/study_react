import React, {useState, useRef} from 'react';

function InputSample(){
    // const [text,setText] = useState('');
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const nameInput = useRef();
    const {name,nickname} = inputs;
    // 키값
    const onChange =(e)=>{
        const {name,value} = e.target;
        
        setInputs({
            ...inputs,
            // 기존값을 불러와야함
            // 불변성을 지킨다고 표현함
            [name] : value
        })
    }
    const onReset=(e)=>{
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus();
    }

    return (
      <div>
          <input 
            name="name" 
            placeholder="이름" 
            value={name} 
            onChange={onChange}
            ref={nameInput}
          />
          <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChange}/>
          <button onClick={onReset}>초기화</button>
          <div>
              <b>값 :</b>
              {name} ({nickname})
          </div>
      </div>
    );
}

export default InputSample;