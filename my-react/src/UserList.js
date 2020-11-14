import React from 'react';

function User({user, onRemove, onColor}){
    return(
        <div>
            <b style={{
                color : user.active ? 'green' : 'black',
                cursor : 'pointer'
            }} 
            onClick = {()=>onColor(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onColor}){
    return (
        <div>
            {
                users.map(
                    user=>(<User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove}
                        onColor = {onColor}
                        />)
                    )
            }
        </div>
    )
}

export default UserList;