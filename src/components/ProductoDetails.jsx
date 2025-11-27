import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import { DetailsPlantilla } from "./DetailsPlantilla"


export function ProductoDetails() {

    const [producto, setProducto] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('/data/Productos.json')
            .then(response => response.json())
            .then(data => {
                const productoFiltrado = data.find(prod => prod.id == pid)
                if (productoFiltrado)
                    setProducto(productoFiltrado)
            })
    }, [])



    return (
        <div className="productDetailContainer">
            <DetailsPlantilla producto={producto} />
        </div>

    )
}
