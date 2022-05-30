import { motion } from 'framer-motion'
import LinkHandler from '../Components/LinkHandler'
import styles from "./Complemento_2.module.css"
import app from '../img/app.png'

function Complemento_3() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.Complemento_Main}>
            <section className={styles.Complemento_1}>
                <h1>
                    O Desafio foi criar uma calculadora sem utilizar a função math()
                </h1>
            </section>
            <section className={styles.Complemento_2}>
                <h1>
                    Criando a minha própria lógica para a execução dos cálculos
                </h1>
            </section>
            <section className={styles.Complemento_3}>
                <h1>
                    Aplicação focada principalmente no JavaScript, sem Frameworks ainda
                </h1>
            </section>
            <section className={styles.Complemento_4}>
                <h1>
                    O Desafio foi um sucesso, mas então parti para o próximo
                </h1>
            </section>
            <section className={styles.Complemento_Div_Calc}>
                <a href="https://mundusuni.github.io/Ferramenta-de-Alerta/" target="_blank" rel="noreferrer" className={styles.Complemento_Calc}>
                    <img src={app} alt="App Ferramenta de Alarme" />
                </a>
            </section>
            <section className={styles.Complemento_Div_Link}>
                <LinkHandler to="/complemento_4" complemento="complemento_4" className={styles.Complemento_Link}/>
            </section>
        </motion.div>
        
    )
}

export default Complemento_3