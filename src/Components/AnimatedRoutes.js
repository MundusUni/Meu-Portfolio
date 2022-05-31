import Home from '../Pages/Home'
import ContadorBinario from '../Pages/ContadorBinario'
import Calculadora from '../Pages/Calculadora'
import FerramentaDeAlarme from '../Pages/FerramentaDeAlarme'
import Proximo from '../Pages/Proximo'
import Curriculo from '../Pages/Curriculo'
import Complemento_1 from '../Pages/Complemento_1'
import Complemento_2 from '../Pages/Complemento_2'
import Complemento_3 from '../Pages/Complemento_3'
import Complemento_4 from '../Pages/Complemento_4'

import React from "react"
import {Routes, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes () {
    const location = useLocation();

    return ( 
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/Meu-Portfolio" element={<Home/>} />
                <Route path="/contador" element={<ContadorBinario/>} />
                <Route path="/calculadora" element={<Calculadora/>} />
                <Route path="/alarme" element={<FerramentaDeAlarme/>} />
                <Route path="/proximo" element={<Proximo/>} />
                <Route path="/curriculo" element={<Curriculo/>} />
                <Route path="/complemento_1" element={<Complemento_1/>} />
                <Route path="/complemento_2" element={<Complemento_2/>} />
                <Route path="/complemento_3" element={<Complemento_3/>} />
                <Route path="/complemento_4" element={<Complemento_4/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes