import React from 'react';
import { Routes, Route,BrowserRouter as Router,useParams} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AllFoods from './pages/AllFoods';
import MyCart from './pages/MyCart';
import ConfirmationCard from './components/OrderplacedCard/ConfirmationCard';
import Orders from './pages/Orders';
import OrderSummary from './components/OrderplacedCard/OrderSummary';

function App(props) {
const {_id} =useParams();
console.log(_id);

  return (
    <Layout>
       
      <Routes>

        
      <Route path="/" element={ <AllFoods/>} />
        <Route path="/allfoods" element={ <AllFoods/>} />
        <Route path="/mycart" element={ <MyCart/>} />
        <Route path="/orderSummary/:_id" element={ <OrderSummary/>} />
        <Route path="/orders" element={ <Orders/>} />
        <Route path="/orderPlaced" element={ <ConfirmationCard/>} />
        </Routes>
   
    </Layout>
  );
}

export default App;
