import prisma from '../config/connectDB';
let getHomePage = async (req, res) => {
    const job = await prisma.customers.findMany();
    res.json(job);
}

module.exports = {
    getHomePage
}