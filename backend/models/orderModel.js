const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   cartItems:String,
   amount:String,
   status:String,
   createdAt:Date
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports=orderModel;
