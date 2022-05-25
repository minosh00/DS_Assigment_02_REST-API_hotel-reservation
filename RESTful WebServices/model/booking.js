const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    room:{type:String, required:true},
    roomid:{type:String, required:true},
    userid:{type:String , required:true},
    fromdate:{type:String, required:true},
    todate:{type:String, required:true},
    totalDays:{type:String , required:true},
    totalAmount:{type:String, required:true},
    transactionId:{type:String, required:true},
    status:{type:String, required:true , default:'booked'},
},{
    timestamps:true,
}) 

const bookingModel=mongoose.model('book' , bookingSchema)

module.exports = bookingModel