import mongoose from 'mongoose';



const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, { timestamps: true})

const coursesSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type: String,
        required: true
    },
    

    image:{
        type: String,
        required: true
    },

    video:[],
   
    
    category:{
        type: String,
        required: true,
        
    },
    description:{
        type: String,
        required: true,
        
    },
    duration:{
        type: String,
        required: true,
        
    },
    reviews: [reviewSchema],
    rating:{
        type: Number,
        required: true,
        
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
        
    },
    price:{
        type: Number,
        required: true,
        default: 0
        
    },
    
}, {timestamps: true})

mongoose.models = {}
const Course = mongoose.models.Course || mongoose.model("Course", coursesSchema);

export  default Course ;