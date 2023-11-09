"use client"
import { createContext,useState, useContext, useEffect } from "react"


export const RevlyContext = createContext({})

export const RevlyProvider = ({children}) => {

    
    const defaultBasket = JSON.parse(localStorage.getItem('basket')) || []
    const [items,setItems] = useState(defaultBasket)


    useEffect(() => {
        localStorage.setItem('basket',JSON.stringify(items))
    },[items])

    


    const addToBasket = (data) => {
        setItems((prev) => [...prev,data]);
        
    }


    const removeFromBasket = (item_id) => {
        const filtered = items.filter((item) => item._id !== item_id)
        setItems(filtered)
    }
    console.log(items);

    const values = {
        items,
        setItems,
        addToBasket
    }

  

    return(
        <RevlyContext.Provider value={values} >
            {children}
        </RevlyContext.Provider>
    )

}

export const useRevlyContenxt = () => useContext(RevlyContext)