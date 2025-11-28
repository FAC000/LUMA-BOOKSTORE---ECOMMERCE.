import { useCarritoContext } from "../Hooks/CarritoContext";
import { BarraEnvio } from "./BarraEnvio";
import { Link } from "react-router-dom";


export function CartProducts({ setModal, setMod }) {
    const { carrito, deleteProduct, addCarrito, precioTotal } = useCarritoContext();

    function FinalizarCompra() {
        setMod(true)
        setModal(false)
    }

    return (
        <>
            {
                carrito.length === 0 ? (
                    <div className="carritoVacio">
                        <h1>¡Carrito Vacio!</h1>
                        <h2>¿Te vas a quedar con ganas de leer?</h2>
                        <Link to={'/productos'}>
                            <button onClick={() => setModal(false)} >Ir a la tienda</button>
                        </Link>
                    </div>
                ) : (



                    <div className="cartProductsContainer">
                        {carrito.map(prod => (
                            <div key={prod.id} className="cartItem">
                                <img
                                    src={`/img/${prod.imagen}`}
                                    alt={prod.titulo}
                                    className="cartItemImg"
                                />
                                <div className="cartItemInfo">
                                    <h2 className="cartItemTitulo">{prod.titulo}</h2>
                                    <div className="contadorContainer">
                                        <button onClick={() => addCarrito(prod.id, -1)}>-</button>
                                        <span>{prod.quantity}</span>
                                        <button onClick={() => addCarrito(prod.id, 1)} >+</button>

                                        <span className="subtotal">
                                            ${prod.precio * prod.quantity}
                                        </span>
                                        <button className="productoBasura" onClick={() => deleteProduct(prod.id)}>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))
                        }
                        <div>
                            <div className="envioGratis">
                                <p>ENVIO GRATIS A LOS <span>$50.000</span></p>
                                <p>Precio Total: <span>${precioTotal()}</span></p>
                            </div>
                            <BarraEnvio />
                        </div>
                        <div className="endBuy">
                            <button onClick={FinalizarCompra}>Finalizar Compra</button>
                        </div>
                    </div >
                )
            }
        </>
    );
}

