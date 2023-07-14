import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import classes from "./OrderSummary.module.css"
import axios from 'axios';
import { img } from 'react'
import Summary from './Summary';
const OrderSummary = (props) => {
    const { _id } = useParams();
    const [data, setData] = useState();
    const [loading, setloading] = useState(true);


    async function getOredrById(_id) {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/order/${_id}`);
            const newData = response.data;
            return newData;
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const newData = await getOredrById(_id);
                await setData(newData);
                setloading(false)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData()

    }, [_id]);

    if (loading) {
        return <h1 style={{ textAlign: "center" }}>Loading....</h1>
    }
    console.log(data.cart);
    //   console.log(data.date);  console.log(data._id);
    const timestamp = new Date(`${data.date}`);
    const formattedDate = timestamp.toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

   var totalAmount=0;
    for(let i=0;i<=data.cart.length-1;i++){
        totalAmount=totalAmount+((data.cart[i].qty)*data.cart[i].price);
    }
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Order Summary</h1>
            <div className={classes.orderBox} >
                <div className={classes.orderId}>
                    <p className={classes.orderIdHeading}><span className={classes.ordertext} >Order_Id: </span>{data._id}</p>
                    <p className={classes.orderIdHeading}><span className={classes.ordertext}>Date: </span>{formattedDate}</p>
                </div >
                {data.cart.map((item) => {
                return (
                    <div className={classes.orderdetails} key={item.id} >
                        <img src={item.url} className={classes.image}/>
                        <div>
                            <p className={classes.details}>{item.name}</p>
                            <p className={classes.details}>{item.desc}</p>
                            <p className={classes.details}>{item.qty}</p>
                            <p className={classes.details}>${item.price}</p>
                             

                        </div>
                      
                    </div>
                )
            })}
                     <h1>Total Amount=${totalAmount}</h1>
            </div>
   

        

        </div>
    )
}

export default OrderSummary