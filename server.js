require('dotenv').config();
const express = require('express');
const app = express();


//Database
const connectDB = require('./config/db');


//express middleware 
app.use(express.json());

app.use(express.urlencoded({extended: true}));

//Routers
const taskRouter = require('./routes/taskRoutes');

app.use("/api/v1/tasks", taskRouter);



const port = process.env.PORT || 3000;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        console.log('connected to database successfully...');
        app.listen(port, () => 
        console.log(`Server running on port ${port}...`));      
    } catch(error){
        console.log(error);
    }
};
start();