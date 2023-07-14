import React from 'react'
import classes from './Summary.module.css'
const Summary = (props) => {
    // console.log(data.date)
  return (
    <div className={classes.container}>
    <h1 className={classes.heading}>Order Summary</h1>
    <div className={classes.orderid} >
       {/* <p><span>Order_Id</span>{props.data._id}</p>
        <p><span>Date</span>{props.data.date}</p> */}
    </div>
    <div className={classes.orderBox}>

    </div>
    </div>
  )
}

export default Summary