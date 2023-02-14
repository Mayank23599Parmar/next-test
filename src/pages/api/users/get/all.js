import { PrismaClient } from '@prisma/client'
// get All user data URL:/api/users/get/all
async function getUsers(req,res){
   if(req.method != "GET"){
    return  res.status(404).json({message:`can not use ${req.method} for This URL  `})
   }
   const prisma = new PrismaClient()
   const users= await prisma.user.findMany()
   if(users){
       res.status(200).json(users)
   }
}
export default getUsers;