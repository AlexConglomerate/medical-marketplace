import UserList from "./components/userList";
import ControlPanel from "./components/controlPanel";

function App() {
    return (
        <div className={'flex flex-col mx-20 mx-24'}>
            <ControlPanel/>
            <UserList/>
        </div>
    );
}

export default App;
