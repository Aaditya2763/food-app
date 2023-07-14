const mongoose = require('mongoose');
const Food = require('./models/Food');

// mongoose.connect('mongodb://localhost:27017/food-app-noida-apr')
//     .then(() => console.log("Connected"))
//     .catch(() => console.log('Error!!!!'));


const DUMMY_FOODS = [
    {
        name: 'Burger',
        desc: 'Extra Cheese and Spice',
        price: 10,
        image_Url:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
        name: 'Panner Tikka',
        desc: 'Extra Cheese and Spice',
        price: 12,
        image_Url:"https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg"
    },
    {
        name: 'Pizza',
        desc: 'Extra Cheese and Spice',
        price: 8,
        image_Url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqOuxbQi2DBdipS84B_DK9MI-WqQdObPy9g&usqp=CAU"
    },
    {
        name: 'Noodles',
        desc: 'Extra Cheese and Spice',
        price: 9,
        image_Url:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg"
    },
    {
        name: 'Momos',
        desc: 'Extra Cheese and Spice',
        price: 7,
        image_Url:"https://static.toiimg.com/thumb/87672662.cms?width=680&height=512&imgsize=111910"
    }
];



const seedFood = async () => {
    await Food.deleteMany({})
  .maxTimeMS(30000) // Increase the timeout to 30 seconds
  .exec();
//     console.log("hello");
    await Food.insertMany(DUMMY_FOODS);
    console.log("FOOD SEEDED");
}

 module.exports =seedFood;