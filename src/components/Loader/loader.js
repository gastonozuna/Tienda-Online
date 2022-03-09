import { Spinner } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './loader.css'

export const Loader = () => {
    return(
        <Spinner animation="border" role="status" color="secondary" className="spinner">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    )
}