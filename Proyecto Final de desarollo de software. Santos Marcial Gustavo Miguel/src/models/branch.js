import { Schema,model } from "mongoose";

const branchSchema = new Schema({
    Nombre: String, 
    Codigo: String,
    Teléfono: Number,
    Dirección: String,
    Ubicación: String,
    Status: String
}, {
    timestamps: true,
    versionKey: false
})

export default model("Branch",branchSchema);