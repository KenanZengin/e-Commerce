import { Schema, model, models } from "mongoose"

const addressSchema = new Schema({

    address :{
        country :  String,
        province : String
    },
    author : {type : Schema.Types.ObjectId , ref : 'users'},

})



const userAddress = models.categories || model('categories',addressSchema)


export default userAddress