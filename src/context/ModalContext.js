import React, {createContext, useState, useEffect} from 'react'
import axios from "axios"

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idReceta, setIdReceta ] = useState(null)
    const [ informacion, setReceta] = useState({})

    useEffect(()=> {

        if(!idReceta) return

        const ID_Receta = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const res = await axios.get(url)
            setReceta(res.data.drinks[0])
        }
        ID_Receta()

    }, [idReceta])

    return (
        <ModalContext.Provider value={{
            informacion,
            setReceta,
            setIdReceta
        }} >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
