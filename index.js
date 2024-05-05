import express from 'express'
import cors from 'cors'
import connectdb from './db/connectdb.js';
import web from './Routes/web.js'
const app = express();


const port = 3000;
const db_url = ' Paste Your Databse URL here '


app.use(cors());
//set up middleware
app.use(express.json());

//load routes
app.use('/', web);

//db connection
connectdb(db_url);

//listen to port 
app.listen(port, ()=>{
    console.log("Listening to port ", port);
})