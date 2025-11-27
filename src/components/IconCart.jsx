import { useState } from "react";
import { useCarritoContext } from "../Hooks/CarritoContext";
import { CartProducts } from "./CartProducts";


export function IconCart() {

    const { totalProducto } = useCarritoContext()
    const [modal, setModal] = useState(false)
    return (
        <>
            <div>
                <i className="bi bi-cart" onClick={() => setModal(true)}></i>
                <span className="carritoCantidad">{totalProducto()}</span>
            </div>

            {
                modal && (
                    <div className="capaModal">
                        <div className="modalContainer">
                            <div className="cancelModal" onClick={() => setModal(false)}>
                                <i className="bi bi-x-lg"></i>
                            </div>
                            <CartProducts setModal={setModal} />
                        </div>
                    </div>
                )
            }

        </>


    );

}
