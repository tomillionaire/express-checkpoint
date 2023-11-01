const express = require('express')
const userRouter = express.Router()

userRouter.get('/users', (req,res)=>{
    res.send([
        {
        name: "Tomilola",
        phoneNumber: 9022222222,
        email: "tomilola@gmc.com",
        married: false,
        hobbies: ['reading', 'running']
    },
    {
        name: "Tomillionaire",
        phoneNumber: 9022222223,
        email: "tomillionaire@gmc.com",
        married: true,
        hobbies: ['reading', 'cooking']
    }
])
})

userRouter.get('/users/:id',(req,res)=>{
    res.send({
        name: "Tomillionaire",
        phoneNumber: 9022222223,
        email: "tomillionaire@gmc.com",
        married: true,
        hobbies: ['reading', 'cooking']
    })
})

userRouter.put('/users/:id',(req,res)=>{
    res.send('update a user')
})

userRouter.post('/users',(req,res)=>{
    res.send('post a user')
})

userRouter.delete('/users/:id',(req,res)=>{
    res.send('delete a user')
})

userRouter.patch('/users/:id',(req,res)=>{
    res.send('modify a user')
})


module.exports=userRouter