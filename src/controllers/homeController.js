import prisma from '../config/connectDB';
let getHomePage = async (req, res) => {
    try {
        const customersWithOrders = await prisma.customers.findMany({
            include: {
                orders: true
            }
        });
        res.json(customersWithOrders);
    } catch (error) {
        res.json({
            errorMessage: error.message
        })
    }

}

let getCustomersWithOrders = async (req, res) => {
    const id = 114;
    try {
        const customersWithOrders = await prisma.customers.findMany({
            where: {
                customerNumber: Number(id)
            },
            include: {
                orders: true
            }
        });
        res.status(200).json(customersWithOrders);
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        })
    }

}


module.exports = {
    getHomePage,
    getCustomersWithOrders
}