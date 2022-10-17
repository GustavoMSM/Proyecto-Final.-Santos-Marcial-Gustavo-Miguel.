import Branch from "../models/branch"

export const createBranch = async (req, res) =>{
    
    const{Nombre,Codigo,Teléfono,Dirección,Ubicación,Status} = req.body

    const newBranch = new Branch({Nombre,Codigo,Teléfono,Dirección,Ubicación,Status});

    const branchSaved = await newBranch.save()

    res.status(201).json(branchSaved)
}

export const getBranch =async (req, res) =>{
    const branches = await Branch.find();
    res.json(branches)
}

export const getBranchById =async (req, res) =>{
    const branch = await Branch.findById(req.params.getBranchById);
    res.status(200).json(branch)
}

export const updateBranchById = async (req, res) =>{
    const updateBranch = await Branch.findOneAndUpdate(req.params.branchId, req.body,{
        new: true
    })
    res.status(200).json(updateBranch)
}


