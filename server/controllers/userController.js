const userModel = require('../models/usermodels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.signup=async(req,res)=>{
    try {
        const existinguer = await userModel.findOne({
            email:req.body.email,
            role:req.body.role
        });
        if(existinguer){
            return res.send({
                msg:'User is Already Exist'
            })
        }else{
            // Hash the passwor
            const salt = await bcrypt.genSalt(10)
            const hashpassword= await bcrypt.hash(req.body.password,salt) 
            req.body.password=hashpassword;
            const user = new userModel(req.body)
            await user.save()
            return res.send({
                msg:'success'
            })
        }
        
    } catch (error) {
        throw(error)
       
    }

}

exports.login=async(req, res)=>{
    try {
        const user= await userModel.findOne({
            email:req.body.email,
           
        })
        if(!user){
           return res.send({
               msg:'User have not Registered'
           })
        }else{
            const comparepassword= await bcrypt.compare(req.body.password,user.password)
            if(!comparepassword){
                return res.send({
                    msg:'passowrd is inccorect'
                })
            }
            const token=jwt.sign({userID:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            return res.send({
                msg:'success',
                token, 
                user
            })
        }

    } catch (error) {
        throw(error)   
    }
}


exports.getCurrentuser=async(req,res)=>{
    const userID= req.body.userID;
    console.log(userID)
    try{
        const user = await userModel.findById(req.body.userID)
        console.log(user)
        return res.send({
            user,
            msg:'user get Success'
           
        })
    }catch(error){
        throw(error)
    }
}


