import React from 'react'
import style from './Alert.module.css'
const Alert = (props) => {
  return (
    setTimeout(()=>{
        <div className={style.container}>{props.message}</div>
        console.log(props.message)
    },1000)

  )
}

export default Alert