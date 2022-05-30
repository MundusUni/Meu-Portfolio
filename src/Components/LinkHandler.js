import {Link} from 'react-router-dom'
import arrow from '../img/arrow.png'

function LinkHandler(props) {
    return(
        <div>
        <Link className={props.className} to={props.to}><img src={arrow} alt="Link para Continuar"/></Link>
        </div>
    )
}

export default LinkHandler