import styles from './Button.module.css'

export function Button(props: any) {
    return (
        <button className={styles.button} type={props.type || "button"}
                onClick={props.onBtnClick}>{props.children}</button>
    )
}