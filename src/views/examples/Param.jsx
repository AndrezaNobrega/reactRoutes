import React from "react";
import { useParams } from 'react-router-dom'

const Param = props => {
    /* tem que ser o msm nome que está linkado no 
     na parte dos useParams() menu */
    const { id } = useParams()
    return (
        <div className="Param">
            <h1>Param</h1>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Param