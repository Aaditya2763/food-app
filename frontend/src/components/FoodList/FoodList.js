import React from 'react';
import Food from '../Food/Food';
import styles from './FoodList.module.css';

const FoodList = ({ foods }) => {
  return (
      <ul className={styles['food-list']}>
          {
              foods.map((food) => {
                  return <Food
                      id={food._id}
                      url={food.image_Url}
                      key={food._id}
                      name={food.name}
                      price={food.price}
                      desc={food.desc}
                  />
              })
          }
    </ul>
  )
}

export default FoodList;