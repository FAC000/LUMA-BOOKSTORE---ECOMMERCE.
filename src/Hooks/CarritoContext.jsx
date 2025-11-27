import { createContext, useContext, useState, useEffect } from "react";


const carritoContext = createContext()
export const useCarritoContext = () => useContext(carritoContext)

export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState([])
    const [producto, setProductos] = useState([])

    useEffect(() => {
        fetch('/data/Productos.json')
            .then(response => response.json())
            .then(data => setProductos(data))
    }, [])


    const addCarrito = (id, cantidad) => {
        const enCarrito = carrito.some(prod => prod.id === id)
        if (enCarrito) {
            setCarrito(prevCarrito =>
                prevCarrito.map(prod =>
                    prod.id === id
                        ? { ...prod, quantity: Math.max(prod.quantity + cantidad, 1) }
                        : prod))
        } else {
            const productoNuevo = producto.find(prod => prod.id === id)
            setCarrito(prevCarrito =>
                [...prevCarrito, { ...productoNuevo, quantity: cantidad }]
            )
        }
    }


    const totalProducto = () => {
        return carrito.reduce((acum, prod) => acum + prod.quantity, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acum, prod) => acum + prod.quantity * prod.precio, 0)
    }

    const deleteProduct = (id) => {
        setCarrito(prevCarrito => prevCarrito.filter(prod => prod.id !== id));
    }

    return (
        <carritoContext.Provider value={{ totalProducto, addCarrito, carrito, deleteProduct, precioTotal }}>
            {children}
        </carritoContext.Provider>
    )
}
