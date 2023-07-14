import React from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'

const ConfirmationCard = () => {
  return (
    <div className={classes.container} >
    <h1>Your order placed succesfully</h1>
    <button className={classes.button} style={{color:'white'}}><Link to="/allfoods">Place another order</Link></button>
</div>  )
}

export default ConfirmationCard