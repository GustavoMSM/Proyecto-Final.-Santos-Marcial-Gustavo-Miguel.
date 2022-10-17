import { Schema,model } from "mongoose";

const salesSchema = new Schema({
    Tipo_de_producto: String, 
    Total: Int32Array,
    Usuario_que_vendió_el_producto: Number,
    Surcursal: String,
    Metodo_de_pago: Float32Array,
}, {
    timestamps: true,
    versionKey: false
})

export default model("Sales",salesSchema);