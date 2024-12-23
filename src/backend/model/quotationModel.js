import mongoose from "mongoose";

const QuoatationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      },  
      description: {
        type: String,
        required: true
      },  
      Total: {
        type: Number,
        required: true
      },  
      professionFee: {
        type: Number,
        required: true
      },
      subTotal: {
        type: Number,
        required: true
      },
      
});

export default mongoose.model('quotation',QuoatationSchema)