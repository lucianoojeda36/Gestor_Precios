import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { getPorcentaje, getProductByCodigo} from '../store/Action'
import './Precios.sass'

export function Precios() {
    const [state, setState] = useState('')
    const [porcentaje, setPorcentaje] = useState('')


    const dispatch = useDispatch()


    function handelSubmit(e: any) {
        e.preventDefault()
        dispatch(getProductByCodigo(state))
        dispatch(getPorcentaje(porcentaje))

    }


    return (
        <div>
            <form onSubmit={handelSubmit} className="formulario">
                <input placeholder='Codigo' value={state} onChange={(e) => setState(e.target.value)} className="inputcodigo" />
                < input placeholder='porcentaje ganancia ' value={porcentaje} onChange={(e) => setPorcentaje(e.target.value)} className="inputcodigo" />
                <input type='submit' value='buscar' className='buttonInput' />
            </form>
            <form action="http://localhost:4000/subir" encType="multipart/form-data" method="POST">
                <input type="file" name="file" />
                <input type="submit" value="Upload a file" />
            </form>
        </div>
    )
}