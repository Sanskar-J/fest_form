import mongoose from "mongoose";

const Fetched= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone_no:{type:String, required:true},
    prompt:{type:String},
});

const FetchedData=mongoose.model('Fetched',Fetched)

export default FetchedData;