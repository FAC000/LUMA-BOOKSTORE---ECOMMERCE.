import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductosPlantilla } from "./ProductosPlantilla"
import { ProductoMap } from "./ProductoMap"


export function ProductoGenero() {

    const { cat } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        fetch('/data/Productos.json')
            .then(response => response.json())
            .then(data => {
                const generoProducto = data.filter(prod => prod.genero === cat)
                if (generoProducto)
                    setProducto(generoProducto)
            })
    }, [cat])




    return (
        <div className="categoriaContainer">
            <ProductoMap productos={producto} />
        </div>
    )
}
