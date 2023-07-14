import React,{useEffect} from 'react';
import FoodList from '../components/FoodList/FoodList';
import { getAllFoods } from '../lib/api';
import useHttp from '../hooks/use-http';
import MealsSummary from '../components/MealSymmary/Mealsummary';
import styles from "./MyCart.module.css";
import mainImg from '../assets/meals.jpg'
import classes from '../components/Layout/MainNavigation.module.css'
import {img} from 'react'
const AllFoods = () => {

    const { data, status, error, sendRequest } = useHttp(getAllFoods, true);
    
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);
    
    if (status === 'pending') {
        return <h1>Loading......</h1>
    }

    if (error) {
        return <h1>{ error }</h1>
    }
    
    console.log(data)
    return (
        <div className={styles.container}>
             
            <img src={mainImg} className={classes.mainImage}/>
            <MealsSummary/>
            {data && <FoodList foods={data} />}
      </div>
    )
}

export default AllFoods;