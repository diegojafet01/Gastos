import React, { Fragment, useState } from "react";
import Error from './error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
    //definir el State
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    //definir presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //agregar 

    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        //validacion

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="¡El presupuesto es incorrecto!" /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >

                <input
                    type="number" className="u-full-width" placeholder="Inserte su Presupuesto." onChange={definirPresupuesto} />
                <input
                    type="submit" className="button-primary u-full-width" value="Definir Presupuesto." />

            </form>
        </Fragment>
    );
}
export default Pregunta;