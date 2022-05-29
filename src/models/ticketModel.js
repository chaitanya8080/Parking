const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
    ticket_id : {type : Number, unique : true, required : true},
    spot_id : {type : mongoose.Schema.Types.ObjectId, ref : 'spot', required : true},
    user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required : true},
    amount : {type : Number, max : 1000, min : 100, required : true},
},{
    versionKey : false,
    timestamps:true,
});

module.exports = mongoose.model('ticket', ticketSchema);