import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/db.connect.js';
import mentorRoutes from './routes/mentor.js';
import studentRoutes from './routes/student.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200)
      .send(`<div style="text-align: center; background-color:purple;  padding: 5px;"><h1>Student-Mentor Management System</h1></div>
      <div>
      
      <div><h2 style="text-align: left; background-color:grey;  padding: 2px; ">Student Endpoints in POSTMAN</h2></div>
      
      <ul>
  
      <li>
      <h3><mark style="background-color:green">POST:</mark> Change the endpoint <mark style="background-color:green"> /api/student/create </mark> to Create a new student</h3>
      </li>
  
      <li>
      <h3><mark>GET:</mark> Use the endpoint <mark> /api/student/students </mark> to Get all students</h3>
      </li>
  
      <li>
      <h3><mark style="background-color:lightblue">PUT:</mark> Change the endpoint <mark style="background-color:lightblue"> /api/student/assign/:id </mark> to Assign a mentor to a student</h3>
      </li>
  
      <li>
      <h3><mark>GET:</mark> Change the endpoint <mark> /api/student/get-particular/:id </mark> to Get the assigned mentor for a student</h3>
      </li>
  
      </ul>
  </div>
  
  <div>
  
      <div><h2 style="text-align: left; background-color:grey;  padding: 2px; ">Mentor Endpoints in POSTMAN</h2></div>
      <ul>
  
  
      <li>
      <h3><mark style="background-color:green">POST:</mark> Change the endpoint to <mark style="background-color:green"> /api/mentor/create </mark> to Create a new mentor</h3>
      </li>
  
      <li>
      <h3><mark style="background-color:red">GET:</mark> Change the endpoint to <mark style="background-color:red"> /api/mentor/mentors </mark> to Get all mentors</h3>
      </li>
  
      <li>
      <h3><mark style="background-color:lightblue">PUT:</mark> Change the endpoint to <mark style="background-color:lightblue"> /api/mentor/assign/:id </mark> to Assign students to a mentor</h3>
      </li>
  
      <li>
      <h3><mark>GET:</mark> Change the endpoint to <mark style="background-color:yellow"> /api/mentor/ment-student/:id </mark> to Get students assigned to a specific mentor</h3>
      </li>
  
      </ul> 
      </div>`);
  });

app.use('/api/mentor',mentorRoutes);
app.use('/api/student',studentRoutes);
connectDB();
connectDB();
const port = process.env.PORT;

app.listen(port,()=>{
    console.log("App Listening to port :", port);
})