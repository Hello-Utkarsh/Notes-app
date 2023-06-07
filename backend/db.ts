const mongoose = require('mongoose');



const connecttomongo = async ()=> {
  await mongoose.connect('mongodb://127.0.0.1:27017/notes-app');
  console.log("Connected")
}

module.exports = connecttomongo