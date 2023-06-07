import mongoose from 'mongoose';

const feeSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
   
    course:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Course'
    },

    
    
   
    
     
        isPaid:{
        type: Boolean,
        required: true,
        default: false
         
     },

     paidAt: {
        type: Date,
     },
    

    
}, {timestamps: true})

const Fee = mongoose.models.Fee || mongoose.model("Fee", feeSchema);

export default Fee;