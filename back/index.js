import express from "express"
import cors from "cors"
import "dotenv/config"
const app = express()
const port = 3000 || process.env.PORT;



//Middlewares 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/', (req, res) => {
  res.send('Hello Porfavor!!')
})



//Route
import internroute from "./routers/userroute.js";
app.use("/intern",internroute);





app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})