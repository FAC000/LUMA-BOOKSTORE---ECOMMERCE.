
import { useEffect, useState } from 'react'
import { ProductoMap } from './ProductoMap'


export function Productos() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('/data/Productos.json')
            .then(response => response.json())
            .then(data => setProductos(data))
    }, [])  

    return (
        <div className='productosContainer'>
            <ProductoMap productos={productos} plantilla ="plantilla" />
        </div>
    )
}