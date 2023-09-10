import React from 'react';
import ReactDom from 'react-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './ErrorMadule.module.css';


const Backdrop = (props) => {
   
    return (
        <div className={styles.backdrop} onClick={props.onCalcelBtn} />
    );
};

const ModalOverlay = (props) => {
    return (
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
    );
};



const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onCalcelBtn={props.onCalcelBtn} />,
                document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay title={props.title} massage={props.massage} onCalcelBtn={props.onCalcelBtn} />,
                document.getElementById('modal-root'))}
        </React.Fragment>

    );
};

export default ErrorModal;
