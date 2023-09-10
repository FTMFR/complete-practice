import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Halper/Wrapper';


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredNameRef = nameInputRef.current.value;
        const enteredAgeRef = ageInputRef.current.value;
        if (enteredAgeRef.trim().length === 0 || enteredNameRef.trim().length === 0) {
            setError({
                title: 'invalid input',
                massage: 'plaese enter valid name and age (non-empty values)'
            });
            return;
        };
        if (+enteredAgeRef < 1) {
            setError({
                title: 'invalid age',
                massage: 'plaese enter valid age (> 0)'
            });
            return;
        };
        props.onAddUser(enteredNameRef, enteredAgeRef);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        // setEnteredUserName('');
        // setEnteredAge('');
    };

    // const userNameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const myErrorHandler = () => {
        setError(null)
    };


    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} massage={error.massage} onCalcelBtn={myErrorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" id='username' ref={nameInputRef} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input type="number" id='age' ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};


export default AddUser;
