import mongoose from "mongoose";

const assistantSchema = mongoose.Schema({
    name: {type:String},
    mobile:{type:Number},
    email:{type: String},
    salary:{type: Number},
    city:{type:String},
    country:{type:String},
    department:{type:String},
    role: {type:String}

})

const assistantModel = mongoose.model('assistant', assistantSchema);
export default assistantModel;