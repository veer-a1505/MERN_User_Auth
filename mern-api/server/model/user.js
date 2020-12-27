const moongose = require('mongoose')
const userSchema = new moongose.Schema({
    username : {
        type : String,
        required : true,
        trim: true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    organization_name : {
        type : String,
        required : true
    },
    joining_date : {
        type : String,
        default : Date
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
    
}, { timestamps : true})



module.exports = moongose.model("User", userSchema)
