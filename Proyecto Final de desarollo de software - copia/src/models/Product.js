import { Schema,model } from "mongoose";

const productSchema = new Schema({
    Nombre: String, 
    SKU: String,
    Stock: Number,
    Surcursal: String,
    Precio: Float32Array,
    Status: String
}, {
    timestamps: true,
    versionKey: false
})

export default model("Product",productSchema);