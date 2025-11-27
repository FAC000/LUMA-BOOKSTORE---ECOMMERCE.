
import { ProductosPlantilla } from './ProductosPlantilla'

export function ProductoMap({ productos }) {
    return (
        <>
            {
                productos.map(prod => <ProductosPlantilla key={prod.id} productos={prod} />)
            }
        </>
    )
}