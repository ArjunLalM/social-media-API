const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

//route

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post")
//MONGOOSE
mongoose.connect(process.env.MONGO_URL,{    
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
.then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use("/api/users" ,userRoute);
app.use("/api/auth",authRoute)
app.use("/api/post",postRoute)
app.listen(8800,()=>{
    console.log("Server Connected")
})