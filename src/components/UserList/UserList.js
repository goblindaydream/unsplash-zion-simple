import React from 'react';

import './style.css';

const UserList = (props) => {
    const { users = [], userSelect, searched } = props
    const searchedUsers = users.map(user => {
        return (
            <div key={user.id} className="user__item my-2" onClick={() => userSelect(user.username)}>
                <img src={user.profile_image.small} alt={user.name} className="mr-2" />
                <span>{user.name}</span>
            </div>
        );
    });

    return (
        <div className="user__list">
            {users.length > 0 ? searchedUsers : ( searched ? (
                    <div className="alert alert-warning" role="alert">
                        No matched user!
                    </div>
                ) : ''
            ) }
        </div>
    )
}

export default UserList;