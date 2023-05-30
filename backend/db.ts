const mongoose = require('mongoose');



const connecttomongo = async ()=> {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// connecttomongo().catch(err => console.log(err));

module.exports = connecttomongo