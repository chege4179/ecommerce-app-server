const Express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const BodyParser = require('body-parser')
const path = require('path')
const FileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

const app = Express()
const PORT = process.env.PORT || 8000;
const connection = require('./database')

app.use(cors())
app.use(FileUpload({ useTempFiles:true }))
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended:true }))

const UserRoutes = require('./Routes/UserRoutes')
const ProductRoutes = require('./Routes/ProductRoutes')

app.use('/auth/user',UserRoutes)
app.use('/product',ProductRoutes)
app.use('/products',Express.static(path.join(__dirname,'Products')))


app.listen(PORT,() => {
    console.log(`Server started on PORT ${PORT}`)
})
