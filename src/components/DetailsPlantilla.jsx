import { useCarritoContext } from "../Hooks/CarritoContext";
import { useCounter } from "../Hooks/useCounter";


export function DetailsPlantilla({ producto }) {

    const { count, incrementar, decrementar } = useCounter()
    const { addCarrito } = useCarritoContext()


    return (
        <div className="detailsContainer">

            <div className="detailsImgBox">
                <img
                    src={`/img/${producto.imagen}`}
                    alt={producto.titulo}
                />
            </div>

            <div className="detailsInfo">
                <h1 className="detailsTitle">{producto.titulo}</h1>
                <p className="detailsAutor"> Por: {producto.autor}</p>

                <p className="detailsDescripcion">
                    {producto.descripcion}
                </p>

                <h3 className="detailsPrecio">${producto.precio}</h3>

                <div className="detailsActions">

                    <button className="detailsBtn" onClick={() => addCarrito(producto.id, count)}>
                        Agregar al carrito
                    </button>

                    <div className="detailsCounter">
                        <button onClick={decrementar}>-</button>
                        <span>{count}</span>
                        <button onClick={incrementar}>+</button>
                    </div>

                </div>

            </div>
        </div>
    );
}
