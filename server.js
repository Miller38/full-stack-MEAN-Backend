import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import router from './routes/routes.js'


const app = express()

dotenv.config()
app.use(express.json())
app.use(urlencoded({ extended:true}))
app.use("/api/products", router)

/*
app.get('/', (req, res)=>{
    res.send("Hola victor")
})
*/

const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI

//* */  1 forma de conectarse al servidor
/*
app.listen(()=>{
    connectDB(MONGO_URI)
    console.log("MongoDb connect")
    console.log(`server running http://localhost:${PORT}`); // comillas invertidas alt+96
})
*/

//* */ 2  forma de conectarse al servidor

const start = async () => {
    try {
        await connectDB(MONGO_URI)
        console.log("MongoDb connect")
        app.listen(PORT, ()=> {
            console.log(`server running http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()





