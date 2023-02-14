import { PrismaClient } from '@prisma/client'
// Update User By ID URL:/api/users/update/{id}
async function userUpdateById(req,res){
   const userData=JSON.parse(req.body)
   if(!req.method == "PUT"){
    return  res.status(404).json({message:`can not use ${req.method} for This URL  `})
   }
   const prisma = new PrismaClient()
   const user= await prisma.user.update({
    where:{id:+req.query.id},
    data:JSON.parse(req.body)
   })
    if(user){
        res.status(200).json({data:user,message:"form updated successfuly",status:200})
    }
}
export default userUpdateById;