import Users from "../models/userModel.js";
import genrateToken from "../utilits/generateToken.js";


export const register=async(req,res)=>{
    const{name,email,password,address,phone}=req.body;
    const userExist=Users.findOne({email})
    if (userExist) {
              res.status(400).json({message:"user allready exist"})  
    }
    else{
        const user =Users.create({
            name,email,password,address,phone
        })
        if (user) {
            res.status(201).json({
                _id:user._id,
                name:user.name ,
                email:user.email ,
                password:user.password ,
                address:user.address ,
                phone:user.phone ,
                token:genrateToken(user._id)
    
            })
            
        }else{
            res.status(401).json({message:"invalid data"});
        }

    }
  
}

export const login =async(req,res)=>{
    const {email,password}=req.body;
    const user=Users.findOne({email});
    if (user && password==user.password) {
        res.status(201).json({
            _id:user._id,
            name:user.name ,
            email:user.email ,
            password:user.password ,
            phone:user.phone ,
            address:user.address ,
            token:genrateToken(user._id)

        })
        
    }
    else{
        res.status(401).json({message:"invalid email or password"});
    }
}