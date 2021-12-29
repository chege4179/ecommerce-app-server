const ProductModel = require('../../Models/ProductModel')

const GetAllProducts = (req,res) => {
    ProductModel.find({},(err,products) => {
        if (err){
            return res.json({
                msg:'An error occurred'
            })
        }else {
            return res.json({
                msg:'Products fetched successfully',
                products
            })
        }
    })
}
module.exports = { GetAllProducts }
