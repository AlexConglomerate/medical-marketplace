import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUserInfo} from "./store/user";
import AdminPage from "./3_page/adminPage";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserInfo())
    }, []);

    return (
        <div className={'flex flex-col mx-20 mx-24'}>
            <AdminPage/>
        </div>
    );
}

export default App;
