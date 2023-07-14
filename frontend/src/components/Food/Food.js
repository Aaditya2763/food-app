import React,{useContext,useState} from 'react'
import styles from './Food.module.css';
import CartContext from '../../store/cart-context';
import Alert from '../Layout/Alert';

const Food = (props) => {
const[input,setInput]=useState(1);
    // Consuming the cart context
    const cartContext = useContext(CartContext);

    const inputChangeHandler=(e)=>{
        setInput(e.target.value)
    }
    const addItemToCartHandler = () => {
        cartContext.addToCart({
            url:props.url,
            id: props.id,
            name: props.name,
            price: props.price,
            desc: props.desc,
            qty:input
        })
    }

    return (
        
        <li className={styles.food}>
            
            <div>
                <img src={props.url} className={styles.itemImage}/>
            </div>
            <div>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.desc}>{props.desc}</p>
                <p className={styles.price}>${ props.price}</p>
            </div>
         

            <div className={styles.inputBox} >
                <label>Amount</label>
                <input
                    type="number"
                    min="1"
                    defaultValue={input}
                    onChange={inputChangeHandler}
                />
                <button onClick={addItemToCartHandler} className={styles['add-btn']}>+ Add</button>
            </div>
        </li>
    )
}

export default Food