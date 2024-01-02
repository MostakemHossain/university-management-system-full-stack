import cors from "cors";
import express from "express";
import { StudentRoutes } from "./app/models/student/student.route";
import { userRoutes } from "./app/models/user/user.route";
const app = express()


//parsers
app.use(express.json())
app.use(cors());

app.use('/api/v1/students',StudentRoutes);
app.use('/api/v1/users',userRoutes);

app.get('/', (req, res) => {
   
  res.send('Hello World!')
})

export default app;

