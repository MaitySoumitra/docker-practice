const express=require('express')

const app=express()

const getData=[
    {name: "Sanatan", age:30, Designation: "Developer"},
    {name: "Bablu", age:33, Designation: "Desginer"},
    {name: "Rintu", age:26, Designation: "HR"}
]

app.get('/', (req, res)=>{
    res.json(getData)
})

app.listen(3000, (req, res, next)=>{
    console.log("The Server Running on 3000")
})