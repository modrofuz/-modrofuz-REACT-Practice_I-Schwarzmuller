import {Card} from "../Card/Card";
import {Button} from "../Button/Button";
import styles from './ErrorModal.module.css'

export function     ErrorModal(props: any) {

    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}></div>
            <Card cssClasses={styles.modal}>
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
        </div>
    )

}
