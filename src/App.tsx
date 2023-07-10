import React, {useState} from 'react';
import './App.css';
import {AddUser} from "./components/Users/AddUser/AddUser";
import {UserList} from "./components/Users/UserList/UserList";
import {UserModelI} from "./models/user.model";

function App() {
    const [usersList, setUsersState] = useState([] as UserModelI[]);

    function onAddUserHandler(newUser: UserModelI) {
        console.log('newUser', newUser)
        setUsersState((prevState: any) => {
            return [...prevState, {username: newUser.username, age: newUser.age, id: newUser.id || Math.random().toString()}]
        })
    }
    return (
        <div className="App">
            <AddUser onAddUser={onAddUserHandler}></AddUser>
            <UserList users={usersList}></UserList>
        </div>
    );
}

export default App;
