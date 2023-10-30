import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true 
    }   
},{
    timestamps: true
    
})

export default mongoose.model('Task', taskSchema);