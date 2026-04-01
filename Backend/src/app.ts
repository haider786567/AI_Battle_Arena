import express from 'express';
import useGraph  from './service/graph.ai.service.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/use-graph',async (req,res)=>{
  await useGraph("write a factorial function in python")
})
export default app;