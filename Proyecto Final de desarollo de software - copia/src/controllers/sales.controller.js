import Sales from "../models/Sales"

export const createSales = async (req, res) =>{
    
    const{Tipo_de_producto,Total,Usuario_que_vendió_el_producto,Surcursal,Metodo_de_pago} = req.body

    const newSales = new Sales({Tipo_de_producto,Total,Usuario_que_vendió_el_producto,Surcursal,Metodo_de_pago});

    const salesSaved = await newSales.save()

    res.status(201).json(salesSaved)
}

export const getSales =async (req, res) =>{
    const sales = await Sales.find();
    res.json(sales)
}

export const getSalesById =async (req, res) =>{
    const sale = await Sales.findById(req.params.getSalesById);
    res.status(200).json(sale)
}


