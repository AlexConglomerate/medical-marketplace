import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "./card";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=30');
                const {data} = response;
                setUsers(data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className={'flex flex-row flex-wrap gap-10 my-24 '}>
            {users.map(user => (
                <Card user={user}/>
            ))}
        </div>
    );
};

export default UserList;
