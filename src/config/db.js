
const mongoose = require("mongoose");

require("dotenv").config()

const url = process.env.MongoURL

module.exports = ()=>{
   return mongoose.connect(url);
}