const express = require('express')
const productRouter = express.Router()

productRouter.get('/product', (req,res)=>{
    res.send([
        {
            name: "iphone 11",
            desc: "black FU ",
            price: "$1200",
            rating: 5
        },
        {
            name: "iphone 14",
            desc: "white FU ",
            price: "$1600",
            rating: 5 
        }
    ])
})

productRouter.get('/product/:id',(req,res)=>{
        res.send({
            
                name: "iphone 11",
                desc: "black FU ",
                price: "$1200",
                rating: 5
        
        })
})

productRouter.post('/product',(req,res)=>{
    res.send("product added succesfully")
})

productRouter.put('/product/:id',(req,res)=>{
    res.send("product updated succesfully")
})

productRouter.delete('/product/:id',(req,res)=>{
    res.send("product deleted successfully")
})
module.exports=productRouter