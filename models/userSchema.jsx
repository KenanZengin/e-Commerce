import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    
    name : String,
    email : String,
    password : String,
    date : {type : Date   , default  : Date.now()},
    address :{
        country :  String,
        province : String
    },
})


const Users = models.users || model('users',userSchema)

export default Users
