import styles from "../Components/Titulo.module.css"

function Titulo({text}) {
    return (
        <div className={styles.Titulo_Content}>
            <h1>{text}</h1>
        </div>
    )
}

export default Titulo