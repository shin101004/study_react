import React, {
  useRef, useState
} from 'react';
import Hello from './hello';
import './App.css'
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './createUser';

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });

  const {username,email} = inputs;

  const onChange=(e)=>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);

  const nextId = useRef(4);

  const onCreate =()=>{
    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));
    setInputs({
      username : '',
      email : ''
    })
      console.log(nextId.current);
      nextId.current+=1;
  };

  const onRemove = id=>{
    setUsers(users.filter(user=>user.id!==id));
  }

  const onColor = id =>{
    setUsers(users.map(user=>user.id===id 
      ? {...user, active: !user.active}
      : user));
  }
  return ( 
  <> 
      {/* <Hello name="react" color="red" isSpecial={true}/> */ } 
      {/* <Hello color="pink"/> */ } 
      {/*주석은 이렇게 */ } 
      {/* <div> JS로 값을 불러 올 땐 이렇게 {name}</div> */} 
      {/* <Counter /> */ } 
      {/* <InputSample/> */ } 
      <CreateUser 
      username={username}
       email={email} 
       onChange={onChange} 
       onCreate={onCreate}
      />
      <UserList users = {users} onRemove={onRemove} onColor={onColor}/> 
    </>
  );
}

export default App;
