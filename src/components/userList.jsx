import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "./card";
import {useSelector} from "react-redux";
import {getUser} from "../store/user";

const UserList = () => {
    const [users, setUsers] = useState([]);

    const newUsers = useSelector(getUser())
    useEffect(() => {
        setUsers(newUsers.users);
    }, [newUsers]);

    return (
        <div className={'flex flex-row flex-wrap gap-10 my-24 '}>
            {users && users.map(user => (
                <Card user={user}/>
            ))}
        </div>
    );
};

export default UserList;
