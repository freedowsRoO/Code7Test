import mongoose from 'mongoose'
//import mongoosePaginate from 'mongoose-paginate'

const BillSchema = new mongoose.Schema({
    userName: { 
        type: String,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
    billDate: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//BillSchema.plugin(mongoosePaginate);
var Bill = mongoose.model('Bill', BillSchema);
export default Bill;
