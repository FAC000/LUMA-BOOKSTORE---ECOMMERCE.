import React from 'react'

export function Home() {
    return (
        <div className='homeContainer'>
            <div className='homeIzquierdo'>
                <div className='tittleContainer'>
                    <h1><span className='spanTittle'>D</span>escubrí tu próxima gran historia</h1>
                    <p>Un mundo de libros para inspirarte, emocionarte y acompañarte en cada momento.</p>
                </div>
                <div className='datosContainer'>
                    <div className='datosUno'>
                        <h2>+300</h2>
                        <p>Libros</p>
                    </div>
                    <div className='datosUno'>
                        <h2>+1000</h2>
                        <p>Horas de Lectura</p>
                    </div>

                </div>
            </div>
            <div className='homeDerecho'>
                <div className='derechoContainer'>
                <div className='Uno'></div>
                <div className='Dos'></div>
                <div className='Tres'></div>
                <div className='Cuatro'></div>
                </div>
            </div>

        </div>
    )
}
