import React,{useState} from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // componentsDidMount + componentsDidUpdate + compoenetsWillUnmount
    // useEffect(()=>{
    //     const fetchUsers = async () => {
    //         try {
    //             setUsers(null);
    //             setError(null);
    //             setLoading(true);

    //             const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    //             setUsers(response.data);
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchUsers();
    // },[]);

    const onClick=async()=>{
        setLoading(true);
        setError(null);

        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        setUsers(response.data);
        setLoading(false);
    }
    
    return (
        <>
        <button onClick={onClick}>눌러주세요</button>
        <ul>
                {error&&<li>에러가 발생했습니다.</li>}
                {loading&&<li>로딩 중 ..</li>}
                {users&&users.map(user=>(
                    <li key={user.id}>
                        {user.name} ({user.username});
                    </li>
                ))}
            </ul>
            
        </>
    )
}

export default Users;