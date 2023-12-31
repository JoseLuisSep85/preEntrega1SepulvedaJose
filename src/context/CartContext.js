import { createContext, useState } from "react";

export const CartContext = createContext({
    cart : []
})

export const CartProvider = ({Children}) => {

    const [cart, setCart] = useState([])

    console.log(cart)


    const addItem = (item, cantidad) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            console.error('El producto ya se agrego')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)

    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {Children}
        </CartContext.Provider>
    )
}