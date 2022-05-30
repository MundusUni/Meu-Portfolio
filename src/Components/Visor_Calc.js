import styles from "./Visor_Calc.module.css"

function Visor_Calc({text}) {
    return (
        <div className={styles.Visor_Container}>
            <h3 className={styles.Visor_Content}>{text}</h3>
        </div>
    )
}

export default Visor_Calc