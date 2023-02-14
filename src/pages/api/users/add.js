import { PrismaClient } from '@prisma/client'
// add user Data URL URL:/api/users/add
async function userAdd(req, res) {
    console.log( req.body.mobile ," req.body.mobile ");
    const userData=JSON.parse(req.body)
    console.log(userData)
    if (!req.method == "POST") {
        return res.status(404).json({ message: `can not use ${req.method} for This URL  ` })
    }
    const prisma = new PrismaClient()
    // check user alredy exist or not
    let userCount = await prisma.user.aggregate(
        {
            _count:	true,
            where: {
                OR: [
                    {
                    email: userData.email
                    },
                    { mobile: userData.mobile },
                ],

            }

        }

    )
    if (userCount._count > 0) {
        return res.status(404).json({ message: `email or mobile number is already exist  ` })
    }
    const user = await prisma.user.create({ data: JSON.parse(req.body) })
    if (user) {
        res.status(200).json({ data: user, message: "form submited successfuly", status: 200 })
    }
}
export default userAdd