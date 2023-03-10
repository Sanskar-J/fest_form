 import express from 'express'
 import * as dotenv from 'dotenv'
 import cors from 'cors'

 import connectDB from './db/connect.js'
 import postRoutes from './routes/postRoutes.js'

 dotenv.config()

 const app=express()
 app.use(cors())
 app.use(express.json({limit:'50mb'}))

 app.use('/api/v1/post', postRoutes)

 app.get('/',async(req,res)=>{
    res.send('form backend');
 })

 const startServer = async ()=>{
    try {
        connectDB(process.env.MONGODB_URL)

        app.listen(8080,()=>{
            console.log('dude its working')
        })

    } catch (error) {
        console.log(error)
    }
 }
 startServer()
