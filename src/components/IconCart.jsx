import { useState } from "react";
import { useCarritoContext } from "../Hooks/CarritoContext";
import { CartProducts } from "./CartProducts";
import { Link } from "react-router-dom";

export function IconCart() {

    const { totalProducto } = useCarritoContext()
    const [modal, setModal] = useState(false);
    const [mod, setMod] = useState(false);

    const numeroRandom = (max) => {
        return Math.floor(Math.random() * (max + 1));
    };


    return (
        <>
            <div className="iconCartContainer">
                <i className="bi bi-cart" onClick={() => setModal(true)}></i>
                <div className="carritoCantidad">
                <span>{totalProducto()}</span>
                </div>
            </div>


            {modal && (
                <div className="capaModal">
                    <div className="modalContainer">
                        <div className="cancelModal" onClick={() => setModal(false)}>
                            <i className="bi bi-x-lg"></i>
                        </div>
                        <CartProducts setModal={setModal} setMod={setMod} />
                    </div>
                </div>
            )}
            {mod && (
                <div className="capaModal">

                    <div className="modalCompraFin">
                        <h1>Gracias por tu compra ❤</h1>
                        <p>Tu numero de pedido es : <span>#{numeroRandom(9999)}</span> </p>
                        <Link to={'/'}>
                            <button className="buttonModalFin" onClick={()=> setMod(false)}>Inicio</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
