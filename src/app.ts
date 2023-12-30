import cors from "cors";
import express from "express";
const app = express()


//parsers
app.use(express.json())
app.use(cors());
app.get('/', (req, res) => {
   
  res.send('Hello World!')
})

export default app;

