import { motion } from 'framer-motion'
import LinkHandler from '../Components/LinkHandler'
import styles from './Home.module.css'

function Home() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.Home_Main}>  {/*initial={{x: '100vw'}} animate={{x:'0'}} exit={{x:-window.innerWidth}} transition={{duration:1}}*/}
            <section className={styles.Home_Section_1}>
                <h1>
                    Guilherme Moreira Sebold
                </h1>
            </section>
            <section className={styles.Home_Section_2}>
                <h1>
                Dev Fullstack Jr. | Software Developer | JavaScript | HTML | CSS | React
                </h1>
            </section>
            <section className={styles.Home_Link}>
                <LinkHandler to="/complemento_1" complemento="complemento_1" />
            </section>
        </motion.div>
    )
}

export default Home