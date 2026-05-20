const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors({
    origin:"http://localhost:5173"
}))
const getData=[
    {id:1, name: "Moruniho", age:30, Designation: "Developer"},
    {id:2, name: "Bantu", age:33, Designation: "Desginer"},
    {id:3, name: "Rintu", age:26, Designation: "HR"}
]

app.get('/', (req, res)=>{
    res.json(getData)
})

app.listen(4000, ()=>{
    console.log("The Server Running on 4000")
})