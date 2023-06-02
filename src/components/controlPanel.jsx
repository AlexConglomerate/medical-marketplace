import React from 'react';
import Button from "../ui/button";
import Input from "../ui/input";

function ControlPanel(props) {
    return (
        <div className={'flex flex-row gap-10 mt-10 '}>
            <Input/>
            <Button name={'Sort'} />
            <Button name={'Update'} />
        </div>
    );
}

export default ControlPanel;