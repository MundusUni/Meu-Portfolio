import { motion } from 'framer-motion'

import LinkHandler from '../Components/LinkHandler'

import styles from "./Complemento_1.module.css"

function Complemento_1() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.Complemento_1_Main}>
            <section className={styles.Complemento_Section}>
                <h1 className={styles.Complemento_1_Superior_1}>
                    Bacharel em Administração com Inglês Fluente e Português Nativo...
                </h1>
                <h1 className={styles.Complemento_1_Inferior_1}>
                    ... em busca de novas experiências profissionais na área da Tecnologia.
                </h1>
            </section>
            <section className={styles.Complemento_Section}>
                <h1 className={styles.Complemento_1_Superior_2}>
                    Autodidata na área da Programação...
                </h1>
                <h1 className={styles.Complemento_1_Inferior_2}>
                    ...tanto no front end quanto no back end.
                </h1>
            </section>
            <section className={styles.Complemento_Section}>
                <h1 className={styles.Complemento_1_Superior_3}>
                    Procurando novas oportunidades de trabalho...
                </h1>
                <h1 className={styles.Complemento_1_Inferior_3}>
                    ...dê uma olhada na minha caminhada:
                </h1>
            </section>
            <section className={styles.Complemento_Section}>
                <div className={styles.Complemento_Div_Link}>
                    <LinkHandler className={styles.Complemento_1_Link} to="/contador" complemento="contador" />
                </div>
            </section>
        </motion.div>
        
    )
}

export default Complemento_1