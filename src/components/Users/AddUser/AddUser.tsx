import React, {useRef, useState} from "react";
import {Card} from "../../UI/Card/Card";
import classes from './AddUser.module.css'
import {Button} from "../../UI/Button/Button";
import {UserModelI} from "../../../models/user.model";
import {ErrorModal} from "../../UI/Error/ErrorModal";
import {ErrorModelI} from "../../../models/error.model";
import {Wrapper} from "../../Helpers/Wrapper";

export function AddUser(props: any) {
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);
    const [error, setErrorState] = useState({} as ErrorModelI)
/*
    const [inputData, setInputData] = useState({
        username: '',
        age: 0,
        id: ''
    } as UserModelI);


    function onUserNameChange(event: any) {
        setInputData((previousState: any) => {
            return {...previousState, username: event.target.value}
        });
    }

    function onAgeChange(event: any) {
        setInputData((previousState: any) => {
            return {...previousState, age: +event.target.value}
        })
    }*/

    function onSubmitForm(event: any) {
        const usernameInputValue = usernameInputRef.current?.value || '';
        const ageInputValue = +(ageInputRef.current?.value || 0);
        event.preventDefault();
        //console.log(JSON.stringify(inputData))
        if (usernameInputValue.trim().length < 0 && ageInputValue < 1) {
            return setErrorState({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            })
        }
        if (usernameInputValue.trim().length < 0) {
            return setErrorState({
                title: 'Invalid name',
                message: 'Please enter a valid name'
            })
        }
        if (ageInputValue < 1) {
            return setErrorState({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
        }
        if (usernameInputValue.trim().length > 0 && ageInputValue > 0) {
            props.onAddUser({username: usernameInputValue, age: ageInputValue});
            //reset values after submit
            /*setInputData({age: 0, username: '', id: ''})*/
            usernameInputRef.current!.value ='';
            ageInputRef.current!.value = '0';
        }
    }


    function onBtnClickHandler() {
        console.log('onBtnClickHandler');
    }

    function errorHandler() {
        setErrorState({title: '', message: ''});
    }

    return (
        <Wrapper>
            {error.title && error.message &&
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card cssClasses={classes.input}>
                {/*<pre>{JSON.stringify(error, null, 2)}</pre>*/}
                <form onSubmit={onSubmitForm}>
                    <label htmlFor={"username"}>User Name</label>
                    <input id={"username"} type={"text"}
                           ref={usernameInputRef}/>
                    <label htmlFor={"age"}>Age</label>
                    <input id={"age"} type="number" ref={ageInputRef}/>
                    <Button type={"submit"} onBtnClick={onBtnClickHandler}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}