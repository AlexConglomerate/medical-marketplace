import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "./card";
import {useSelector} from "react-redux";
import {getUser} from "../store/user";
import Button from "../ui/button";
import _ from "lodash";


const UserList = () => {
    const [users, setUsers] = useState([]);

    const newUsers = useSelector(getUser())
    useEffect(() => {
        setUsers(newUsers.users);
    }, [newUsers]);

    const handleSort = () => {
        const _users = [...users]
        const sortedUsers = _.orderBy(_users, ["name.first"], ["asc"])
        setUsers(sortedUsers)

    }

    return (
        <div className={'flex flex-row flex-wrap gap-10 my-24 '}>
            <Button name={'Sort'} onClick={handleSort}/>
            {users && users.map(user => (
                <Card user={user}/>
            ))}
        </div>
    );
};

export default UserList;
