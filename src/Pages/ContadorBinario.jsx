import Titulo from "../Components/Titulo"
import MarcaDagua from "../Components/MarcaDagua"
import InputBox from "../Components/InputBox"
import ButtonSubmit from "../Components/ButtonSubmit"

import styles from "../Pages/ContadorBinario.module.css"

import { useState } from 'react'
import { motion } from 'framer-motion'
import LinkHandler from "../Components/LinkHandler"

function ContadorBinario() {

    function Contagem() {
        let numeroBinario
        let frase = document.getElementsByClassName("resultado")[0]
    
        switch(inputnumero) {
            case "0000":    
                numeroBinario = 0   
                break
            case "0001":
                numeroBinario = 1
                break
            case "0010":
                numeroBinario = 2
                break
            case "0011":
                numeroBinario = 3
                break
            case "0100":
                numeroBinario = 4
                break
            case "0101":
                numeroBinario = 5
                break
            case "0110":
                numeroBinario = 6
                break
            case "0111":
                numeroBinario = 7
                break
            case "1000":
                numeroBinario = 8
                break
            case "1001":
                numeroBinario = 9
                break
            default:
                numeroBinario = "Desconhecido"
                break
        }
        frase.innerHTML = `Seu Número Binário é ${numeroBinario}`   
    }


    const [inputnumero, setBinario] = useState('')

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.ContadorBinario_Container}>
            <div>
                <Titulo text="Contador Binário" />
            </div>
            <section className={styles.ContadorBinario_SubContainer}>
                <InputBox className="inputBoxContador" type="text" value={inputnumero} event={(e) => {setBinario(e.target.value)}} placeholder="Digite um Binário entre 1 e 9"/>
                <br/><ButtonSubmit click={Contagem} text="Converter!"/>
                <h3 className="resultado"></h3>
            </section>
            <section className={styles.ContadorBinario_SubContainer}>
                <h4>Para ajudar, aqui está uma cola com os números em binário:</h4>
                <p>0000 = 0</p>
                <p>0001 = 1</p>
                <p>0010 = 2</p>
                <p>0011 = 3</p>
                <p>0100 = 4</p>
                <p>0101 = 5</p>
                <p>0110 = 6</p>
                <p>0111 = 7</p>
                <p>1000 = 8</p>
                <p>1001 = 9</p>
            </section>
            <MarcaDagua/>
            <div className={styles.ContadorBinario_SubContainer}>
                <div className={styles.Complemento_Div_Link}>
                <LinkHandler to="/complemento_2" complemento="complemento_2" />
                </div>
            </div>
        </motion.div>
    )
}

export default ContadorBinario