import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './ErrorMadule.module.css';


const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onCalcelBtn} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.massage}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onCalcelBtn}>OK!</Button>
                </footer>
            </Card>
        </div>

    );
};

export default ErrorModal;
