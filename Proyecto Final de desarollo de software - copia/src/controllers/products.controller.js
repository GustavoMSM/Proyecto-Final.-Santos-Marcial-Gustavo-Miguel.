import Product from "../models/Product"

export const createProduct = async (req, res) =>{
    
    const{Nombre,SKU,Stock,Surcursal,Precio,Status} = req.body

    const newProduct = new Product({Nombre,SKU,Stock,Surcursal,Precio,Status});

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts =async (req, res) =>{
    const products = await Product.find();
    res.json(products)
}

export const getProductById =async (req, res) =>{
    const product = await Product.findById(req.params.getProductById);
    res.status(200).json(product)
}

export const updateProductById = async (req, res) =>{
    const updateProduct = await Product.findOneAndUpdate(req.params.productId, req.body,{
        new: true
    })
    res.status(200).json(updateProduct)
}

export const deleteProductById = async (req, res) =>{
    const {productId} = req.params;
    await Product.findByIdAndDelete(productId)
    res.status(204).json()
}
