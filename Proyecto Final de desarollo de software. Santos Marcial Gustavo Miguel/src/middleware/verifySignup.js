import { RS } from "../models/Role.js"

export const checkRolesExisted = (req, res, next) =>{
    if(req.body.roles){
        for(let i= 0; i< req.body.roles.length; i++){
            if(!RS.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: "Role ${req.body.roles[i]} does not exists"
                })
            }
        }
    }
}