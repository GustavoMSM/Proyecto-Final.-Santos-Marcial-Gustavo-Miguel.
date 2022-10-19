import { Schema,model } from "mongoose";

const paymentSchema = new Schema({
    Nombre: String, 
    Codigo: String,

}, {
    timestamps: true,
    versionKey: false
})

export default model("Payment",paymentSchema);