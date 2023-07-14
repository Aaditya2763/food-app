import React, { createContext, useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { placeOrderFromCart } from '../lib/api';
const CartContext = createContext({
    cart: [],
    order:[],
    cartLength: 0,
    addToCart: () => { },
    placeOrder: () => { },
    increaseQty:()=>{},
    decreaseQty:()=>{},
    removeItem:()=>{},
    status: null,
    error: null,
    data:null
});

export const CartContextProvider = (props) => {
    
    const intialCart = JSON.parse(window.localStorage.getItem("cart") || '[]');
    const [cart, setCart] = useState(intialCart);
  
    const { status,error,data,sendRequest } = useHttp(placeOrderFromCart);

    const addToCart = (item) => {

        const isPresent = cart.some((food) => food.id === item.id);
const message=`${item.name }`+"quantity increase by "+`${item.qty}`+" visit cart to add or remove the quantity"
        if (isPresent) {
            setCart((prevState) => {
                setTimeout(()=>{
             alert(message)
                },10)
                return prevState.map((food) => food.id === item.id ? { ...food, qty: food.qty + 1 } : food);

            })
        } else {
            setCart((prevState) => [...prevState, item]);
        } 
    }    
    const increaseQty = (item) => {
        setCart((prevState) => {
          return prevState.map((food) => (food.id === item.id ? { ...food, qty: food.qty + 1 } : food));
        });
      };
 

      const decreaseQty = (item) => {
        setCart((prevState) => {
          if (item.qty > 1) {
            return prevState.map((food) => (food.id === item.id ? { ...food, qty: food.qty - 1 } : food));
          } else {
            return prevState;
          }
        });
      };
      
  
      const removeItem = (item) => {
        setCart((prevState) => prevState.filter((food) => food.id !== item.id));
      };
    

    const placeOrder = (props) => {
        sendRequest(cart);
        console.log(cart)
    //    alert("Your order placed successfully");
    // console.log("your order placed successfully")
        setCart(() => []);
    }


    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart,
        placeOrder: placeOrder,
       increaseQty: increaseQty,
       decreaseQty: decreaseQty,
       removeItem:removeItem,
        status: status,
        error: error,
        data:data
    }

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    return <CartContext.Provider value={context}>
        {props.children}
  </CartContext.Provider>
}

export default CartContext;