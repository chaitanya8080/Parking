

const express = require("express");
const { json } = require("express/lib/response");
require( 'dotenv').config()
const connect = require("./src/config/db")
const app = express();


const userController = require("./src/controllers/userController")
const floorController = require('./src/controllers/floorController')
const spotController = require('./src/controllers/spotController')
const ticketController = require('./src/controllers/ticketController')




app.use(express.json())

app.use("/users",userController);
app.use("/floor", floorController);
app.use("/spot", spotController);
app.use("/ticket", ticketController)

const port = process.env.PORT || 3000

app.listen(6000, async ()=>{
    try{
             await connect()
            console.log(`connected to ${port} `)
    } catch (error) {
        console.log(error)
    }
}
)
