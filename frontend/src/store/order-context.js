import { fetchAllOrders } from "../lib/api";
import React, { createContext, useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';
const OrderContext = createContext({
   
    order:[],
    requestOrderDetails:()=>{},
    orderSummary: () => { },
    status: null,
    error: null,
    data:null
});



export const OrderContextProvider = (props) => {
    
  
    const initialOrder = JSON.parse(window.localStorage.getItem("order") || '[]');

    const [order, setOrder] = useState(initialOrder);
    const { status,error,data, getRequest} = useHttp(fetchAllOrders);

    const requestOrderDetails=(props)=>{
        getRequest();
        setOrder(data)
    }

 
    const orderSummary = (props) => {
        const isPresent = order.some((orderItem) => [...order,orderItem]);
        // const message=`${item.name }`+"quantity increase by "+`${item.qty}`+" visit cart to add or remove the quantity"
        if (isPresent) {
            setOrder((prevState) => {
                return prevState.map((orderItem) => [...order,orderItem]);
            })
        } else {
            setOrder((prevState) => [...prevState]);
        } 
   
        getRequest();
        setOrder(data);
    }
  

    const context = {
       order:order,
       requestOrderDetails: requestOrderDetails,
        orderSummary:orderSummary,
        status: status,
        error: error,
        data:data
    }

    useEffect(() => {
        window.localStorage.setItem("order", JSON.stringify(order));
    }, [order]);
    
    return <OrderContext.Provider value={context}>
        {props.children}
  </OrderContext.Provider>
}

export default OrderContext;