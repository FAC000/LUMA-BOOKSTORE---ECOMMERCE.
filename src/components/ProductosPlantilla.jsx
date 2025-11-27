import { useCarritoContext } from "../Hooks/CarritoContext";
import { Link } from "react-router-dom";


export function ProductosPlantilla({ productos }) {

    const { addCarrito } = useCarritoContext()

    return (
        <div className="cardFull">
            <Link to={`/productos/${productos.id}`} >
                <img
                    src={`/img/${productos.imagen}`}
                    alt={productos.titulo}
                    className="cardImgFull"
                />

                <div className="cardDarkLayer"></div>
            </Link>
            <div className="cardOverlay">
                <h2 className="cardTitulo">{productos.titulo}</h2>
                <p className="cardPrecio">${productos.precio}</p>

                <button className="cardBtn" onClick={() => addCarrito(productos.id, 1)}  >Agregar al carrito</button>
            </div>

        </div >
    );
}
