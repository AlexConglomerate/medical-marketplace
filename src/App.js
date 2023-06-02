import UserList from "./components/userList";
import ControlPanel from "./components/controlPanel";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUserInfo} from "./store/user";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserInfo())
    }, []);

    return (
        <div className={'flex flex-col mx-20 mx-24'}>
            <ControlPanel/>
            <UserList/>
        </div>
    );
}

export default App;
