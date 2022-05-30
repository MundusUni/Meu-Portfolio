import styles from "./Button_Calc.module.css"

function Button_Calc ({value, click, type, id, text}) {
    
    function handleFunction(event) {
        click(value)
        event.preventDefault()
    }

    return ( 
        <button className={type} id={id} onClick={handleFunction}>{text}</button>
    )
}

export default Button_Calc