import React from 'react';
import Button from "../ui/button";
import Input from "../ui/input";
import {getUserInfo} from "../store/user";
import {useDispatch} from "react-redux";

function ControlPanel(props) {

    const dispatch = useDispatch()

    const handleUpdate = () => {
        dispatch(getUserInfo())
    }
    
    return (
        <div className={'flex flex-row gap-10 mt-10 '}>
            <Input/>
            <Button name={'Sort'} />
            <Button name={'Update'} onClick={handleUpdate}/>
        </div>
    );
}

export default ControlPanel;