const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const app = express();
// Middlewares
app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            app.listen(PORT,()=>{
                console.log(`Server Running on port ${PORT}`)
            })
        })
        .catch((err) => console.log(err));