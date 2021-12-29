
const Express = require('express')
const router = Express.Router()


router.post('/login',(req, res) => {
    res.send('Login Route')
})
router.post('/signup',(req,res) => {
    res.send('Sign Up Route')
})
router.put('/passwordreset',(req,res) =>{
    res.send('Password Reset Route')
})

module.exports = router;
