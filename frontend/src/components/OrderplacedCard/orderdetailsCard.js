import React from 'react'
import {img} from 'react'
import classes from './OrderDetails.module.css'
import OrderSummary from './OrderSummary';
import { Link } from 'react-router-dom';
const orderdetailsCard = (props) => {
    const timestamp=new Date(`${props.data.date}`);
    const formattedDate = timestamp.toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    const images=[];
    // console.log(formattedDate)
    for(let i=0;i<=props.data.cart.length-1;i++){
       images[i]=props.data.cart[i].url;
    }
    // console.log(images)
//    console.log(props.data)
const _id = props.data._id;
  
  return (
    <div className={classes.container}>
        <ul className={classes.list}>
            <li><span style={{color:"rgb(129, 39, 39)"}}>Order number: </span>{props.data._id}</li>
            <li><span style={{color:"rgb(129, 39, 39)"}}>Date: </span>{formattedDate}</li>
            <div className={classes.imgbox}>
           {images.map((imgdata)=>{
            return(
              
                    <img  src={imgdata} className={classes.imageList} key={Math.random()}/> 

           
            )
           })}
                </div>
    
        </ul>
        <button className={classes.orderButton}><Link to={`/orderSummary/${_id}`}>View Order Summary</Link></button>
    </div>
  )
}

export default orderdetailsCard