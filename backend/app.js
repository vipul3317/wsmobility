const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  }));

app.use(express.json());

const userRouter=require('./Routers/userRouter');
const authRouter=require('./Routers/authRouter');

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
});