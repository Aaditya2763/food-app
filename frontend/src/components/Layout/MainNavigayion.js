import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css';
import CartContext from '../../store/cart-context';

import { fetchAllOrders } from '../../lib/api';
import OrderContext from '../../store/order-context';

const MainNavigation = () => {

    const cartContext = useContext(CartContext);
const orderContext=useContext(OrderContext)
const onClickHandler = () => {
   
    orderContext.requestOrderDetails();

}

    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/allfoods">Food Point</Link></li>
                <div className={styles.orderCartBox}>
                <Link to="/mycart"  style={{marginLeft:30}}>My Cart <sup>{ cartContext.cartLength }</sup> </Link>
                <Link to="/orders" style={{marginTop:5,marginLeft:30}} onClick={onClickHandler}>Orders</Link>
                </div>
                
            </ul>
        </nav>
    )
}

export default MainNavigation