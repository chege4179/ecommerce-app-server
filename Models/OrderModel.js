const mongoose = require('mongoose')
const ProductModel = require('./ProductModel')


const OrderModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    products:[ProductModel],
    total:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('orders',OrderModel)
