import React, { useEffect, useState } from 'react'

const UseEffectUso = () =>{

    const [numero1, setNumero1] = useState(0)

    const [numero2, setNumero2] = useState(0)

    useEffect(()=>{
        console.log("useEffect sin dependencia");
    })

    useEffect(()=>{
        console.log("useEffect con dependencia de []");
    },[])

    useEffect(()=>{
        console.log("useEffect con dependencia de [numero1]");
    },[numero1])

    const aumentar = () =>{
        setNumero1(
            numero1+1    
        )
    }

    const aumentar2 = () =>{
        setNumero2(
            numero2+1    
        )
    }

    return(
        <>
            <button onClick={aumentar}>aumentar</button>
            <div>{numero1}</div>

            <button onClick={aumentar2}>aumentar2</button>
            <div>{numero2}</div>
        </>
    )
}

export default UseEffectUso