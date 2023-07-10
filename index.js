import express from 'express'
import connectDB from './database/db.js'
import userRouter from './routers/userRouter.js'
import dotenv from 'dotenv'
dotenv.config()
connectDB()
 const app=express()

app.use(express.json())
app.use('/api/user',userRouter)



 const port=process.env.PORT||5000


 app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
 })