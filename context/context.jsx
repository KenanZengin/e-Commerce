"use client"
import { createContext,useState, useContext, useEffect } from "react"


export const RevlyContext = createContext({})

export const RevlyProvider = ({children}) => {

    
    const defaultBasket = JSON.parse(localStorage.getItem('basket')) || [];
    const [items,setItems] = useState(defaultBasket);


    useEffect(() => {
        localStorage.setItem('basket',JSON.stringify(items));
    },[items]);

    


    const addToBasket = (data, findBasketItem) => {
        if(!findBasketItem){
            return setItems((items)=> [...items,data]);
        }
        const filtered = items.filter((item) => item._id !== findBasketItem._id);
        return setItems(filtered);    
    }


    const removeFromBasket = (item_id) => {
        const filtered = items.filter((item) => item._id !== item_id);
        setItems(filtered);
    }

    const increasingProduct = (item_id) => {
        const findItem = items.find((item) => item._id == item_id)
        findItem.count +=1
        setItems([...items])
    }

    const creasingProduct = (item_id) => {
        const findItem = items.find((item) => item._id == item_id)
        findItem.count -=1
        setItems([...items])
    }

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
        increasingProduct,
        creasingProduct
    }

  

    return(
        <RevlyContext.Provider value={values} >
            {children}
        </RevlyContext.Provider>
    )

}

export const useRevlyContenxt = () => useContext(RevlyContext)