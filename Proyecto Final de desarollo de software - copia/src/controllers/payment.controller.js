import Payment from "../models/payment"

export const createPayment = async (req, res) =>{
    
    const{Nombre,Codigo} = req.body

    const newPayment = new Payment({Nombre,Codigo});

    const paymentSaved = await newPayment.save()

    res.status(201).json(paymentSaved)
}

export const getPayment =async (req, res) =>{
    const payments = await Payment.find();
    res.json(payments)
}

export const getPaymentById =async (req, res) =>{
    const payment = await Payment.findById(req.params.getPaymentById);
    res.status(200).json(payment)
}

export const updatePaymenttById = async (req, res) =>{
    const updatePayment = await Payment.findOneAndUpdate(req.params.paymentId, req.body,{
        new: true
    })
    res.status(200).json(updatePayment)
}

export const deletePaymentById = async (req, res) =>{
    const {paymentId} = req.params;
    await Payment.findByIdAndDelete(paymentId)
    res.status(204).json()
}
