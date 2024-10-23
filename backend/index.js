const express=require('express');
const cors=require('cors');
const port=2000;
const app=express();
const studentModel=require('./userSchema')
const mongoose=require('mongoose');
app.use(express.json());
app.use(cors())
mongoose.connect('mongodb://localhost:27017/class')
.then(()=>console.log('Connected Successfully')
)
.catch((err)=>console.log('Not Possible to connect with database : ',err)
)
app.get('/userget',async(req,res)=>{
    try{
        const details=await studentModel.find();
        res.json(details)
    }
    catch(err){
        res.status(500).json({err:"Data fetching error"})
        console.log('Data not fetched : ',err);  
    }
})
app.post('/userpost',async(req,res)=>{
    try{
        const {name,age,course}=req.body;
        const details1=await studentModel.create({name,age,course})
        res.status(201).json({
            data:details1
        }
        )
    }
    catch(err){
        res.status(400).json({err:"Data fetching Error"})
        console.log('Data not fetched : ',err);  
    }
})

app.listen(port,()=>{
    console.log('Server connecting on port : ',port); 
})
