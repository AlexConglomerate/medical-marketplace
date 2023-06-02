import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserInfo} from "../store/user";
import _ from "lodash";
import Card from "../2_components/card";
import Button from "../1_ui/button";
import Input from "../1_ui/input";

function AdminPage(props) {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const newUsers = useSelector(getUser())

    useEffect(() => {
        setUsers(newUsers.users);
    }, [newUsers]);

    const handleSort = () => {
        const _users = [...users]
        const sortedUsers = _.orderBy(_users, ["name.first"], ["asc"])
        setUsers(sortedUsers)
    }

    const handleUpdate = () => dispatch(getUserInfo())


    return (
        <div className={'flex flex-col mx-20 mx-24'}>

            <div className={'flex flex-row gap-10 mt-10 '}>
                <Input/>
                <Button name={'Sort'} onClick={handleSort}/>
                <Button name={'Update'} onClick={handleUpdate}/>
            </div>

            <div className={'flex flex-row flex-wrap gap-10 my-24 '}>
                {users && users.map(user => <Card user={user}/>)}
            </div>
        </div>


    );
}

export default AdminPage;