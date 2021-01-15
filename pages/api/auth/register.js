// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initdb from '../../../helpers/initdb';
import userModel from '../../../models/auth';
import Bcrypt from "bcrypt";

initdb();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try{
      const {name,email,password} = req.body;
      const saltRounds = 10;
      const hashPassword = await Bcrypt.hash(password,saltRounds);
      if(!name || !email || !password){
        return res.status(422).json({msg:"Required fields"})
      }
      const user = await userModel.findOne({email})
      if(user){
        return res.status(422).json({msg:"User email already exist"})
      }
      const newUser = await new userModel({
        name,
        email,
        password:hashPassword
      }).save()
      res.status(200).json({msg:"Registeration successfully completed"})
    }catch(err){
      res.status(500).json({err})
      console.log(err);
    }
  } else {
    res.status(200).json({success:"false"})
  }
}
