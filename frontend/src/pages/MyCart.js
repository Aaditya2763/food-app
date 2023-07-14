import React,{useContext} from 'react';
import CartContext from '../store/cart-context';
import styles from "./MyCart.module.css";
import { Link } from 'react-router-dom';

const MyCart = () => {

  const { cart,placeOrder,increaseQty,decreaseQty,removeItem,status,error,data } = useContext(CartContext);
  
  const totalPrice = cart.reduce((total, food) => total + food.qty * food.price, 0);
if(cart.length===0){
  return(
    <ul className={styles.cart}>
    <li>My Cart</li>
    {
        cart.map((item,idx) => {

           return <li key={idx}>
                <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                <p className={styles['item-desc']}>{ item.desc}</p>
                <p className={styles['item-price']}>$ {item.price}</p>
               <button>-</button>
               <button>+</button>
               <button className={styles['remove-btn']}>remove</button>
            </li>
        })
    }
    <li>Total: {totalPrice}  <span className={styles['place-order-btn']}><button  style={{backgroundColor:'#6B0A0A'}}><Link to="/allfoods">Add items to your cart</Link></button></span> </li>
</ul>
  )
}
  if (status === 'pending' && data !==null) {
    return <p>Placing Your Order.......</p>
  }
// console.log("hello")
  console.log(cart);
 
  return (
     <ul className={styles.cart}>
            <li>My Cart</li>
            {
                cart.map((item,idx) => {

                   return <li key={idx}>
                    <img src={item.url} className={styles.image}/>
                        <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                        <p className={styles['item-desc']}>{ item.desc}</p>
                        <p className={styles['item-price']}>$ {item.price}</p>
                       <button onClick={()=>decreaseQty(item)}>-</button>
                       <button onClick={() => increaseQty(item)}>+</button>
                       <button className={styles['remove-btn']} onClick={() => removeItem(item)}>remove</button>
                    </li>
                })
            }
            <li>Total: {totalPrice}  <span className={styles['place-order-btn']}><button onClick={()=>placeOrder(cart)}  style={{backgroundColor:'#6B0A0A'}}><Link to="/orderPlaced">Place Order</Link></button></span> </li>
        </ul>
  )
}

export default MyCart;