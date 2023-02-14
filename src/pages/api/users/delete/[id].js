import { PrismaClient } from '@prisma/client'
// Delete user by id URL:/api/users/delete/{id}
async function DeleteUserByID(req, res) {
    if (!req.method == "DELETE") {
        return res.status(404).json({ message: `can not use ${req.method} for This URL  ` })
    }
    const prisma = new PrismaClient()
    const users = await prisma.user.delete({
        where: { id: +req.query.id }
    })
    if (users) {
        res.status(200).json({ data: users })
    }
}
export default DeleteUserByID;