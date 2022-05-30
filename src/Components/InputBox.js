import styles from "../Components/InputBox.module.css"

function InputBox ({type, event, value, placeholder}) {
    return (
        <input className={styles.InputBox_Content} type={type} onInput={event} value={value} placeholder={placeholder}></input>
    )
}

export default InputBox