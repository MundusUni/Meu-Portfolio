import {Link} from 'react-router-dom'
import certificate from '../img/certificate.png'

function LinkHandler(props) {
    return(
        <section className={props.className}>
        <a href="https://mundusuni.github.io/classic-cv/" target="_blank" rel="noreferrer" className={props.className}>
            <img src={certificate} alt="Link para o Curriculo" />
        </a>
    </section>
    )
}

export default LinkHandler