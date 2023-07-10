import React, {useState} from "react";
import {Card} from "../../UI/Card/Card";
import classes from './AddUser.module.css'
import {Button} from "../../UI/Button/Button";
import {UserModelI} from "../../../models/user.model";
import {ErrorModal} from "../../UI/Error/ErrorModal";
import {ErrorModelI} from "../../../models/error.model";

export function AddUser(props: any) {
    const [inputData, setInputData] = useState({
        username: '',
        age: 0,
        id: ''
    });
    const [error, setErrorState] = useState({} as ErrorModelI)

    function onUserNameChange(event: any) {
        setInputData((previousState: any) => {
            return {...previousState, username: event.target.value}
        });
    }

    function onAgeChange(event: any) {
         setInputData((previousState: any) => {
             return {...previousState, age: +event.target.value}
         })
    }

    function onSubmitForm(event: any) {
        event.preventDefault();
        console.log(JSON.stringify(inputData))
        if (inputData && inputData.username.trim().length < 0 && inputData.age < 1) {
            return setErrorState({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            })
        }

        if (inputData && inputData.username.trim().length < 0) {
            return setErrorState({
                title: 'Invalid name',
                message: 'Please enter a valid name'
            })
        }
        if (inputData && inputData.age < 1) {
            return setErrorState({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
        }


    if (inputData.username.trim().length > 0 && inputData.age > 0) {
        props.onAddUser(inputData);
        //reset values after submit
        setInputData({age: 0, username: '', id: ''})

    }
}


    function onBtnClickHandler() {
        console.log('onBtnClickHandler');
    }

    function errorHandler() {
        setErrorState({title: '', message: ''}) ;
    }

    return (
        <div>
            {error.title && error.message && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card cssClasses={classes.input}>
                {/*<pre>{JSON.stringify(error, null, 2)}</pre>*/}
                <form onSubmit={onSubmitForm}>
                    <label htmlFor={"username"}>User Name</label>
                    <input id={"username"} type={"text"} onChange={onUserNameChange}/>
                    <label htmlFor={"age"}>Age</label>
                    <input id={"age"} type="number" onChange={onAgeChange} />
                    <Button type={"submit"} onBtnClick={onBtnClickHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
}