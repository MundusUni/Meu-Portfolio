import styles from "../Components/Subtitulo.module.css"

function Subtitulo({text}) {
    return (
        <div className={styles.Subtitulo_Content}>
            <p>{text}</p>
        </div>
    )
}

export default Subtitulo