import { motion } from 'framer-motion'
import LinkHandler from '../Components/LinkHandler'
import styles from "./Complemento_2.module.css"

function Complemento_4() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.Complemento_Main}>
            <section className={styles.Complemento_1}>
                <h1>
                    Foi a minha primeira aplicação realmente única
                </h1>
            </section>
            <section className={styles.Complemento_2}>
                <h1>
                    Utilizando a API da Binance para coletar os dados
                </h1>
            </section>
            <section className={styles.Complemento_3}>
                <h1>
                    Escrito completamente em JS, CSS3 e HTML5 puros
                </h1>
            </section>
            <section className={styles.Complemento_4}>
                <h1>
                    Sem recuar diante dos obstáculos e desafios durante o percurso
                </h1>
            </section>
            <section className={styles.Complemento_Div_Link}>
                <LinkHandler to="/proximo" complemento="Proximo" className={styles.Complemento_Link}/>
            </section>
        </motion.div>
        
    )
}

export default Complemento_4