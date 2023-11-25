"use client"
import { createContext,useState, useContext, useEffect } from "react"


export const RevlyContext = createContext({})

export const RevlyProvider = ({children}) => {

     

    let user_basket_items
    let user_favorite_items
    
    if(typeof window !=="undefined"){
        user_basket_items   =  JSON.parse(localStorage.getItem('basket')) || []
        user_favorite_items =  JSON.parse(localStorage.getItem('favorite')) || []
    }

    let [items,setItems] = useState(user_basket_items)
    let [favoriteItems,setFavoriteItems] = useState(user_favorite_items)
        
    
    useEffect(() => {
        localStorage.setItem('basket',JSON.stringify(items));
    },[items]);
    
    useEffect(() => {
        
        localStorage.setItem('favorite',JSON.stringify(favoriteItems));
    },[favoriteItems]);
    

    const addToBasket = (data, findBasketItem) => {
        if(!findBasketItem){
            return setItems((items)=> [...items,data]);
        }
        const filtered = items.filter((item) => item._id !== findBasketItem._id);

        return setItems(filtered);    
    }

    const addToFavorite = (data) => {

        const optimize = favoriteItems.some((item) => item._id === data._id)
        if(optimize) return false
        
        return setFavoriteItems((items) => [...items, data])
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
        if(findItem.count == 0){
            findItem.count = 0
        }else {
            findItem.count -=1
        }
        
        setItems([...items])
    }

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
        increasingProduct,
        creasingProduct,
        favoriteItems,
        setFavoriteItems,
        addToFavorite
    }

  

    return(
        <RevlyContext.Provider value={values} >
            {children}
        </RevlyContext.Provider>
    )

}

export const useRevlyContenxt = () => useContext(RevlyContext)