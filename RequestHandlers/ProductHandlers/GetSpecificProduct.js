const ProductModel = require('../../Models/ProductModel')

const GetSpecificProduct = (req,res) => {
    const id = req.params.id
    ProductModel.findById(id,{},{},(err,product) => {
        if (err){
            console.log(err)

        }else {
            if (product === null){
                return res.json({
                    msg:'No such product was found',
                    found:false
                })
            }
            return res.json({
                msg:'Product fetched successfully',
                product,
                found:true
            })
        }
    })
}

module.exports = { GetSpecificProduct }
