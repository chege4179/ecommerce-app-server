const Express = require('express')
const router = Express.Router()
const { AddNewProduct } =require('../RequestHandlers/ProductHandlers/AddNewProduct')
const {GetSpecificProduct} = require("../RequestHandlers/ProductHandlers/GetSpecificProduct");
const {GetAllProducts} = require("../RequestHandlers/ProductHandlers/GetAllProducts");
const {EditProductInfo} = require("../RequestHandlers/ProductHandlers/EditProductInfo");


router.post('/add',AddNewProduct)
router.put('/edit',EditProductInfo)
router.get('/all',GetAllProducts)
router.get('/:id',GetSpecificProduct)



module.exports = router;
