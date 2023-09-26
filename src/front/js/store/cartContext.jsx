import { createContext,useState } from "react";

//1.crear contexto

export const CartContext = createContext({
    items:[],
    getProductquantity: () => {},  //we can define a function
})

//2. crear provider give your react app access to all the things in tour context

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        //Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart) // structrureClone hace una copia profunda
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

    }
    const clearCart = () => {
        setCart([])
    }

    return (
    <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}
        >
            {children}
    </CartContext.Provider>
    )
}
