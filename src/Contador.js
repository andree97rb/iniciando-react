import React, { useState } from 'react'

const Contador = () => {
    const [numero, setNumero] = useState(0)

    const [nombre, setNombre] = useState("Mi usuario")


    const aumentar = () => {
        setNumero(
            numero + 1
        )
    }

    const renombrar = ()=>{
        setNombre(
            "Richard"
        )
    }

    return (
        <>
            <div>Bienvenido a mi app, usuario {nombre}</div>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={renombrar}>renombrar</button>
            <div>{numero}</div>
        </>
    )
}

export default Contador