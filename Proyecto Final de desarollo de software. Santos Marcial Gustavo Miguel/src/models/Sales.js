import { Schema,model } from "mongoose";

const salesSchema = new Schema({
    Tipo_de_producto: String, 
    Total: Number,
    Usuario_que_vendió_el_producto: Number,
    Surcursal: String,
    Metodo_de_pago: Number,
}, {
    timestamps: true,
    versionKey: false
})

export default model("Sales",salesSchema);