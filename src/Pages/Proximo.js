import { motion } from 'framer-motion'
import CertificateLink from '../Components/CertificateLink'
import styles from "./Proximo.module.css"

function Proximo() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.Proximo_Main}>
            <section className={styles.Proximo_1}>
                <h1>
                    Esta página foi minha quarta e mais nova aplicação
                </h1>
            </section>
            <section className={styles.Proximo_2}>
                <h1>
                    Focada em CSS, e agora com o uso do Framework React
                </h1>
            </section>
            <section className={styles.Proximo_3}>
                <h1>
                    Desafio aceito e cumprido, nos mais altos padrões.
                </h1>
            </section>
            <section className={styles.Proximo_4}>
                <h1 className={styles.Proximo_4_h1}>
                    O Próximo pode ser o seu...
                </h1>
            </section>
            <section className={styles.Proximo_Div_Curriculo}>
                <CertificateLink to="/curriculo" complemento="Currículo" className={styles.Proximo_Curriculo}/>
            </section>
        </motion.div>
    )
}

export default Proximo