import styles from "./TableBox.module.css"

function TableBox({className_Head}) {
    return (
        <table className={styles.Table}>
            <thead id={className_Head}>
                <tr>
                    <th>Selecionar</th>
                    <th>Simbolo</th>
                    <th>Alerta em</th>
                    <th>Moeda</th>
                    <th>Condição</th>
                    <th>Preço 1</th>
                    <th>Preço 2</th>
                </tr>
            </thead>
        </table>
    )
}

export default TableBox