import styles from "./ButtonSubmit.module.css"

function ButtonSubmit ({click, text}) {
    return (
        <div className={styles.Button_Container}>
            <button className={styles.Button_Content} onClick={click}>{text}</button>
        </div>
   )
}

export default ButtonSubmit