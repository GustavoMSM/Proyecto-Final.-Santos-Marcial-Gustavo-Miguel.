import { Schema,model } from "mongoose";

const productSchema = new Schema({
    Nombre: String, 
    SKU: String,
    Stock: Number,
    Surcursal: String,
    Precio: Number,
    Status: String
}, {
    timestamps: true,
    versionKey: false
})

export default model("Product",productSchema);