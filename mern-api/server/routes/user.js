const express = require('express')
const router = express.Router()
const saltRounds = 10;
const User = require('../model/user')
const { validationRules , validate  } = require('../validator/validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



//Home Route
router.get('/' , (req,res) => {
    res.json({
        Message :'Welcome Home' 
    })
})



//create new user and save the data in DB with hash password
router.post('/signup', validationRules(), validate ,(req,res) => {
    const { username , email , organization_name ,isAdmin } = req.body;
    const password = bcrypt.hash(req.body.password, saltRounds)
    password
        .then( password => {
            const newUser = new User({
                username,
                email,
                password,
                organization_name,
                isAdmin
            })
            newUser.save()
                .then(user => {
                    res.json({
                        Message : 'Success',
                        user 
                    })
                })
                .catch( err => {
                    res.json({error : 'Unable to create user'})
                })            
        })
        .catch(err => {
            res.json({error : err})
        })

})



//retrieve all the user details 
router.get('/users',(req,res) => {
    User.find()
        .then( users => {
            res.json({
                Message : 'Sucess',
                users
            })
        })
        .catch( err => {
            res.json({
                error : err
            })
        })
})



//fetch user details by _id
router.get('/user/:id' , (req,res) => {
    const id = req.params.id;
    User.findById(id)
        .then(user => {
            if(!user){
                res.json({Message : 'User not found'})
            }
            else{
                res.json({
                    Message : 'Sucess',
                    user
                })
            }
        })
        .catch(() => {
            res.json({
                error : 'Invalid user id'
            })
        })   
})


//signin route 
router.post('/signin', (req,res) => {
    const { email } = req.body
    User.findOne({email})
        .then(user => {
            if(!user){
                res.json({
                    error : 'user not exists for this email'
                })
            }
            else{
                const {_id , username, email} = user
                bcrypt.compare(req.body.password, user.password , (err,isMatch) => {
                    if(isMatch && !err){
                        const accessToken = jwt.sign({Id : user._id}, process.env.JWT_SECRET)

                        res.json({
                            Message : 'sucess',
                            accessToken,
                            user : {
                                _id,
                                username,
                                email
                            }
                        }) 
                    }
                    else{
                        res.json({
                            error : 'email and password do not match'
                        })                        
                    }
                })                 
            }
        })  
})



//delete user
router.delete('/user/delete' , (req,res) => {
    const user_id = req.body._id;
    User.findById(user_id)
        .then(user => {
            if(!user){
                res.json({Message : 'User not found'})
            }
            else{
                User.deleteOne(user)
                    .then( user => {
                        res.json({
                            Message : 'Sucessfully removed user',
                     })
                })
            }
        })
        .catch(() => {
            res.json({
                error : 'Invalid user id'
            })
        })  
})


//admin get user
router.get('/getUser/admin/:id' , (req,res) => {
    const user_id = req.params.id;
    User.findById(user_id)
        .then( user => {
            console.log(user)
            if(!user){
                res.json({
                    error : 'user does not exists for this id'
                })
            }
            else{
                res.json({
                    Message : 'sucess',
                    user
                })
            }
        })
        .catch(() => {
            res.json({
                error : 'Invalid user id'
            })
        })
})


//admin get user
router.post('/addUser/admin/', (req,res) => {
    const { username , email , organization_name ,isAdmin } = req.body;
    const password = bcrypt.hash(req.body.password, saltRounds)
    password
        .then( password => {
            const newUser = new User({
                username,
                email,
                password,
                organization_name,
                isAdmin
            })
            newUser.save()
                .then(user => {
                    res.json({
                        Message : 'Success',
                        user 
                    })
                })
                .catch( err => {
                    res.json({error : 'Unable to create user'})
                })            
        })
        .catch(err => {
            res.json({error : err})
        })

})

//admin delete user with _id
router.delete('/deleteUser/admin/:id', (req,res) => {
    const user_id = req.params.id;
    User.findById(user_id)
        .then( user => {
            if(!user){
                res.json({
                    error : 'user does not exists with this id'
                })
            }
            else{
                User.deleteOne(user)
                .then( (user) => {
                    res.json({
                        Message : 'Sucessfully deleted user account',
                        user
                    })
                })
            }
        })
        .catch( () => {
            res.json({
                error : 'Invalid user id'
            })
        })
})


//admin update user details
router.put('/updateUser/admin/:id', (req,res) => {
    const _id = req.params.id;
    const { username , email , organization_name } = req.body;
    User.findByIdAndUpdate({_id},
        {
            $set: {
                username,
                email,
                organization_name
            }
        }, {new : true , upsert :true ,  useFindAndModify : false , timestamps : true , omitUndefined :tru})
            .then(user => {
                if(!user){
                    res.json({
                        error : 'user doesnot exists'
                    })
                }
                else{
                    res.json({
                        Message : "Sucessfully updated",
                        user
                    })
                }
            })
            .catch((err) => {
                res.json({
                    error : "Invalid user id",
                    err
                })
            })

})


module.exports = router