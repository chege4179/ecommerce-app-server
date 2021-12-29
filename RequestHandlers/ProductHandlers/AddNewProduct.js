const path = require('path')
const ProductModel = require('../../Models/ProductModel')
const cloudinary = require('cloudinary').v2


const AddNewProduct  = async (req,res) => {
    const { name,price,description,category,rating } = req.body
    const image = req.files.image

    const { secure_url } = await UploadProductImage(image.tempFilePath,image.name)
        .catch((err) => {
            if (err){
                console.log(err)
                return res.json({
                    msg:'Error occurred while uploading the image'
                })
            }
        })
    console.log('Image Uploaded Successfully')
    const NewProduct =new ProductModel({
        name,price,description,category,rating,imageUrl:secure_url
    })
    NewProduct.save((err,data) => {
        if (err){
            console.log(err)
            return res.json({
                msg:'Error while saving Product',
                err
            })
        }else {
            return res.json({
                msg:'Product Saved successfully',
                product:data
            })
        }
    })

}

function UploadProductImage(ImagePath,ImageName){
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(ImagePath,
            {
                resource_type: "image",
                public_id: `cartify/${ImageName}`,
                chunk_size: 6000000,
                eager_async: true,
                eager_notification_url: "https://mysite.example.com/notify_endpoint"
            },
            (error, result) => {

                if (error){
                    reject(error)
                    console.log("Error >>>",error)
                    return error
                }else {
                    resolve(result)
                }
            });
    })

}
module.exports = { AddNewProduct }
const categories = [
    {
        id:13,
        name:'Shops',
    },
    {
        id:6,
        name:'Fashion'
    },
    {
        id:1,
        name:'Health and Beauty'
    },
    {
        id:2,
        name:'Home and Office'
    },
    {
        id:3,
        name:'Phone and Tablets'
    },
    {
        id:4,
        name:'Computing'
    },
    {
        id:5,
        name:'Electronics'
    },

    {
        id:7,
        name:'Food'
    },
    {
        id:8,
        name:'Real Estate'
    },
    {
        id:9,
        name:'Gaming'
    },
    {
        id:10,
        name:'Customer Services'
    },
    {
        id:11,
        name:'Baby Products'
    },
    {
        id:12,
        name:'Sporting Goods'
    }
]
