

const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    name : {type:String, required: true},
    user_id:{type:Number, required :true,unique:true},
    contact : {type : String, minlength : 10, maxlength : 10, required : true},
    role : {type : String, enum : ['admin', 'user', 'assistant']},  
},
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("user",userSchema);
