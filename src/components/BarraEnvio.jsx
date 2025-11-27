import ProgressBar from 'react-bootstrap/ProgressBar';
import { useCarritoContext } from '../Hooks/CarritoContext';

export function BarraEnvio() {
    const { precioTotal } = useCarritoContext()
    

    const envioGratis = 50000
    const porcentaje = Math.min((precioTotal() / envioGratis) * 100, 100);
    const now = Math.round(porcentaje);


    return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
}

