const router = require('express').Router();
const {signup, login} = require('../Controllers/authController');

router.post('/signup', signup, (req,res) => {
    res.send('great success')
});

router.post('/login', login, (req, res) => {
    res.send('great success');
})

module.exports = router;
