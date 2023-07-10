import styles from './Card.module.css'
export function Card(props:any) {
    return(
        <div className={`${styles['card']} ${props.cssClasses}`}>
            {props.children}
        </div>
    )
}