import React, { useState } from "react";
import Error from "./error";
import shortid from "shortid";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(true)
    const [gastos, guardarGastos] = useState([]);

    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false)
        //constructor gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //componentes principales
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //reset
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega aqui tus gastos</h2>

            {Error ? <error mensaje="¡Ambos campos son requeridos o presupuesto incorrecto!" /> : null}

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input type="text" className="u-full-width" placeholder="EJ. trasnporte, comida....."
                    value={nombre} onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input type="number" className="u-full-width" placeholder="EJ. 500"
                    value={cantidad} onChange={e => guardarCantidad(parseInt(e.target.value))}
                />

            </div>
            <input type="submit" className="button-primary u-full-width"
                value="Agregar Gasto" />
        </form>
    );
}

export default Formulario;