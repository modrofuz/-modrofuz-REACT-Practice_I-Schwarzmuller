import {Card} from "../Card/Card";
import {Button} from "../Button/Button";
import styles from './ErrorModal.module.css'
import React from 'react'
import * as ReactDOM from 'react-dom'

function Backdrop(props: any) {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
}

function ModalOverlay(props: any) {
    return <Card cssClasses={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onBtnClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
}

export function ErrorModal(props: any) {

    return (
        <>
             {ReactDOM.createPortal(<Backdrop
                onConfirm={props.onConfirm}></Backdrop>, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message}
                                                 onConfirm={props.onConfirm}></ModalOverlay>,
                document.getElementById('overlay-root') as HTMLElement)}
        </>
    )

}
