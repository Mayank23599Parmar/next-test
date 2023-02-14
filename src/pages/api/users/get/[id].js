import { PrismaClient } from '@prisma/client'
// get user by id URL:/api/users/get/{id}
async function getUserByID(req, res) {
    if (req.method != "GET") {
        return  res.status(404).json({message:`can not use ${req.method} for This URL  `})
    }
    const prisma = new PrismaClient()
    const users = await prisma.user.findUnique({
        where: { id: +req.query.id }
    })
    if (users) {
        res.status(200).json(users)
    }
}
export default getUserByID;