// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initdb from '../../../helpers/initdb';
import userModel from '../../../models/auth';
import Bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

initdb();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try{
      const {email,password} = req.body;
      if(!email || !password){
        return res.status(422).json({msg:"Required fields"})
      }
      const user = await userModel.findOne({email})
      if(user){
        const checkpass = await Bcrypt.compare(password,user.password)
        if(checkpass){
          const token = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
          return res.status(200).json({msg:"Login success",user,token})
        }else{
          return res.status(422).json({msg:"User not found"})
        }
      }
      res.status(422).json({msg:"User not found"})
    }catch(err){
      res.status(500).json({err})
      console.log(err);
    }
  } else {
    res.status(200).json({success:"false"})
  }
}
