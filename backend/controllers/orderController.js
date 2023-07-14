
const Order = require('../models/Order');


const getAllOrders = async (req, res) => {
    try {
        const foods = await Order.find({});
        res.status(200).json(foods);
        console.log(foods)
    }
    catch (e) {
        res.status(500).json({ message: 'something went wrong while fetching foods' });
    }
}


const getOrderById=async(req,res)=>{
   
    try{
        const{_id}=req.params;
        const data= await Order.findById(_id);
        res.status(200).json(data)
    }
    catch(e){
       
        res.status(400).json("unable to fetch");

    }
}
const OrderController={
    getAllOrders,
    getOrderById

}

module.exports=OrderController