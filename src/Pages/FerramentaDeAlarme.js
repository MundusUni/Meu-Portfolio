import ButtonSubmit from "../Components/ButtonSubmit"
import InputBox from "../Components/InputBox"
import MarcaDagua from "../Components/MarcaDagua"
import SelectBox from "../Components/SelectBox"
import TableBox from "../Components/TableBox"
import styles from "./FerramentaDeAlarme.module.css"

import { motion } from 'framer-motion'
import LinkHandler from "../Components/LinkHandler"

function FerramentaDeAlarme() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.FerramentaDeAlarme_Container}>
            <br/>
            <div className={styles.FerramentaDeAlarme_SubContainer}>
                <h1>Ferramenta de Alarme</h1>
                <h3>Esta ferramenta permite gerar alertas para as moedas da Binance</h3>
            </div>
            <div className={styles.FerramentaDeAlarme_SubContainer}>
                <div>
                    <SelectBox name="moedas" className="moedas" value="ETHBTC" text="ETHBTC"/>
                    <SelectBox name="moedaNativa" className="moedaNativa" value="USDT" text="USDT"/>
                    <SelectBox name="operacao" className="operacao" value="Maior Que" text="Maior Que"/>
                </div>
                <div>
                    <InputBox className="preco1usdt" type="text" placeholder="Preço em USDT - 1"/>
                    <InputBox className="preco1nativo" type="text" placeholder="Preço 1 (Nativo)"/>
                </div>
                <div>
                    <InputBox className="preco2usdt" type="text" placeholder="Preço em USDT - 2"/>
                    <InputBox className="preco2nativo" type="text" placeholder="Preço 2 (Nativo)"/>
                </div>
                <ButtonSubmit text="Adicionar Alarme"/>
            </div>
            <div>
                <TableBox className_Head="thead"/>
            </div>
            <div className={styles.FerramentaDeAlarme_SubContainer}>
                <ButtonSubmit text="Deletar Selecionados"/>
            </div>
            <MarcaDagua/>
            <LinkHandler to="/complemento_4" complemento="complemento_4" />
        </motion.div>
    )
}

export default FerramentaDeAlarme