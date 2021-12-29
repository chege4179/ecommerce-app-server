const Express = require('express')
const router = Express.Router()


router.post('/add',(req, res) => {
    res.send('new order')
})
router.get('/all',(req,res) => {
    res.send('All orders')
})
router.put('/:id',(req,res) =>{
    res.send('Password Reset Route')
})

module.exports = router;
