const  { validationResult, check } = require('express-validator')
const bcrypt = require('bcrypt')

const validationRules = () => {
    return[
        check('username', 'Name at least should be 5 letters').isAlpha().isLength({min : 5}),
        check('email', 'Email should be valid').isEmail().trim(),
        check('password', 'Password at least should be 7').isLength({min : 7})
    ]
}

const validate = (req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.json({
            errro : errors.array()[0]
        })
    }
    next()
}



module.exports = {
    validationRules,
    validate
}