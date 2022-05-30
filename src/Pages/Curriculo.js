import { motion } from 'framer-motion'

function Curriculo() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h1>Curriculo</h1>
        </motion.div>
    )
}

export default Curriculo