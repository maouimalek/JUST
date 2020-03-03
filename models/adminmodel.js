const mongoose=require('mongoose');
const schema =mongoose.Schema;
const adminschema =mongoose.model('admin', new mongoose.Schema({

   
    ID:{
        type: Number,
        required:true,
        trim: true,
    },
    numtel:{
        type: Number,
        required:true,
        trim: true,
    }

})


)
module.exports= adminschema;