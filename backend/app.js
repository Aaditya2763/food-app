if(process.env.Node_Env !=='production'){
  require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const seedFood=require('./seed');
const DB=process.env.DB_URL||'mongodb://localhost:27017/foodapp';
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: {
        w: 'majority', // Specify the desired write concern mode
      },
    });
    console.log('db connected');
  } catch (err) {
    console.log(err);
  }
};
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:['http://localhost:3001']
}))
seedFood( );
const foodApi = require('./apis/foodApi');
const orderApi=require('./apis/foodApi')

app.use('/api/v1',foodApi);
app.use('/api/v1',orderApi)


app.listen(3000,()=>{
  console.log('server started at port 3000');
});