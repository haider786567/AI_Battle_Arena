import express from 'express';
import useGraph  from './service/graph.ai.service.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/use-graph',async (req,res)=>{
  const { problem } = req.body;
  const results = await useGraph(problem)
  console.log(results);
  
  res.status(200).json({
    message: "Graph executed successfully",
    data:results
  })
})
export default app;