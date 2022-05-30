import { motion } from 'framer-motion'
import LinkHandler from '../Components/LinkHandler'
import styles from "./Complemento_2.module.css"
import app from '../img/app.png'

function Complemento_2() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.Complemento_Main}>
            <section className={styles.Complemento_1}>
                <h1>
                    Esta foi minha primeira aplicação
                </h1>
            </section>
            <section className={styles.Complemento_2}>
                <h1>
                    Depois do Olá Mundo, é claro
                </h1>
            </section>
            <section className={styles.Complemento_3}>
                <h1>
                    Extremamente simples, mas foi meu primeiro
                </h1>
            </section>
            <section className={styles.Complemento_4}>
                <h1>
                    Porém minha próxima foi um desafio
                </h1>
            </section>
            <section className={styles.Complemento_Div_Calc}>
                <a href="https://mundusuni.github.io/Calculadora/" target="_blank" rel="noreferrer" className={styles.Complemento_Calc}>
                    <img src={app} alt="App Calculadora" />
                </a>
            </section>
            <section className={styles.Complemento_Div_Link}>
                <LinkHandler to="/complemento_3" complemento="complemento_3" className={styles.Complemento_Link}/>
            </section>
        </motion.div>
    )
}

export default Complemento_2