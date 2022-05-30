import Titulo from "../Components/Titulo"
import Subtitulo from "../Components/Subtitulo"
import styles from "../Pages/Calculadora.module.css"
//import Visor_Calc from "../Components/Visor_Calc"
import Button_Calc from "../Components/Button_Calc"
import MarcaDagua from "../Components/MarcaDagua"

import { useState } from 'react'
import { motion } from 'framer-motion'
import LinkHandler from "../Components/LinkHandler"

function Calculadora() {
    
    const [numtela, setTela] = useState('')
    const [nummem, setNummem] = useState('')
    const [visor, setVisor] = useState('')
    const [tipoDeCalculo, setTipo] = useState('') // 0=soma  1=subtrair  2=dividir  3=multiplicar


    function operacao(n) {
        if (numtela.length < 8) {
            setTela(previous => previous + n);
            setVisor(numtela + n)
        }
        console.log('Pressionado o botão ' + n)
        console.log('numtela :' + numtela)
        console.log('visor :' + visor)
        console.log("----------------------------------------")
    }
    
    function limpar() {
        setTela('')
        setVisor('Favor Digite')
    }
    
    function limpartudo() {
        setTela('')
        setNummem('')
        setVisor('Favor Digite')
    }
    
    function somar() {
        if (nummem > 0) {
            calculo()
            setTipo("0")
            setVisor(nummem)
        } else {
            setTipo("0")
            setNummem(numtela)
            setTela('')
            setVisor(nummem)
        }
    }
    
    function subtrair() {
        if (nummem > 0) {
            calculo()
            setTipo("1")
            //setVisor(nummem)
        } else {
            setTipo("1")
            setNummem(numtela)
            setTela('')
            //setVisor(nummem)
        }
    }
    
    function dividir() {
        if (nummem > 0) {
            calculo()
            setTipo("2")
            //setVisor(nummem)
        } else {
            setTipo("2")
            setNummem(numtela)
            setTela('')
            //setVisor(nummem)
        }
    }
    
    function multiplicar() {
        if (nummem > 0) {
            calculo()
            setTipo("3")
            //setVisor(nummem)
        } else {
            setTipo("3")
            setNummem(numtela)
            setTela('')
            //setVisor(nummem)
        }
    }

    function calculo() {
        switch(tipoDeCalculo) {
            case "0":
                //setNumeros(Numeros.nummem = Number(Numeros.nummem) + Number(Numeros.numtela))
                setNummem(Number(nummem) + Number(nummem))
                setTela('')
                setTipo('')
                break
            case "1":
                //setNumeros((nummem, numtela) => ({nummem: Number(nummem) - Number(numtela)}))
                //setNumeros(Numeros.nummem = Number(Numeros.nummem) - Number(Numeros.numtela))
                setNummem(Number(nummem) - Number(nummem))
                setTela('')
                setTipo('')
                break
            case "2":
                setNummem(Number(nummem) / Number(nummem))
                setTela('')
                setTipo('')
                break
            case "3":
                setNummem(Number(nummem) * Number(nummem))
                setTela('')
                setTipo('')
                break
            default:
                //setTela('')
        }
    }
        
    function resultado() {
        calculo()
        setVisor(nummem)
    }

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.Calculadora_Container}>
            <Titulo text="Calculadora" />
            <div className={styles.Calculadora_SubContainer}>
                <Subtitulo text="Por Favor, digite os números:" />
                {/*<Visor_Calc text="Favor Digite" />*/}
                <h3 className="Visor_Content">{visor}</h3>
                <section className={styles.Buttons_Container_All}>
                    <div className={styles.Buttons_Container_Etc}>
                        <Button_Calc id='plus' text='+' click={somar}/>
                        <Button_Calc id='minus' text='-' click={subtrair}/>
                        <Button_Calc id='mult' text='*' click={multiplicar}/>
                        <Button_Calc id='divi' text='/' click={dividir}/>
                    </div>
                    <div className={styles.Buttons_Container_Num}>
                        <Button_Calc type='number' id='seven' text='7' value='7' click={operacao}/>
                        <Button_Calc type='number' id='eight' text='8' value='8' click={operacao}/>
                        <Button_Calc type='number' id='nine' text='9' value='9' click={operacao}/>
                    </div>
                    <div className={styles.Buttons_Container_Num}>
                        <Button_Calc type='number' id='four' text='4' value='4' click={operacao}/>
                        <Button_Calc type='number' id='five' text='5' value='5' click={operacao}/>
                        <Button_Calc type='number' id='six' text='6' value='6' click={operacao}/>
                    </div>
                    <div className={styles.Buttons_Container_Num}>
                    <Button_Calc type='number' id='one' text='1' value='1' click={operacao}/>
                    <Button_Calc type='number' id='two' text='2' value='2' click={operacao}/>
                    <Button_Calc type='number' id='three' text='3' value='3' click={operacao}/>
                    </div>
                    <div className={styles.Buttons_Container_Num}>
                        <Button_Calc type='number' id='zero' text='0' value='0' click={operacao}/>
                    </div>
                    <div className={styles.Buttons_Container_Etc}>
                        <Button_Calc id='clear' text='C' click={limpar}/>
                        <Button_Calc id='clearall' text='AC' click={limpartudo}/>
                        <Button_Calc id='equal' text='=' click={resultado}/>
                    </div>
                </section>
            </div>
            <MarcaDagua/>
            <LinkHandler to="/complemento_3" complemento="complemento_3" />
        </motion.div>
    )
}

export default Calculadora