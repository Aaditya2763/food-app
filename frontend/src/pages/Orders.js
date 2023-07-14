import React, { useContext, useEffect, useState } from 'react'
import classes from './Orders.module.css'

import OrderDetailsCard from '../components/OrderplacedCard/orderdetailsCard'
import { Link } from 'react-router-dom'
const Orders = (props) => {

    const [orders,setOrders]=useState([])
   

useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/order`);
        const newData = await response.json();
        setOrders(newData);
      };
  
      fetchData();
},[])
// console.log(orders)
if(orders.length===0){
   
    return(
        <div className={classes.container} style={{marginTop:-100}}><h1>You have not placed any order yet !</h1>
        <button className={classes.orderButton}><Link to="/allfoods">View Items</Link></button></div>
        
    )
}

  return (

    <div>
        <h1 className={classes.heading}> Order Dashboard</h1>
        <div >

    {orders.map((data)=>{
    return(
       <OrderDetailsCard key={data._id} data={data}  />
        
    )
    })}

</div>

    </div>
  )
}

export default Orders