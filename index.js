import express from "express";
// import Joi from 'joi';
// import { userSchema } from './schema/index.js';
import router from "./routes/index.js";
import mongoose from "./db/index.js";

let app = express();
let port = process.env.PORT || 5500;
app.use(express.json());

mongoose.connection.on("error", (err) => {
  console.log("database error", err);
});
mongoose.connection.on("open", () => {
  console.log("database connected");
});

 

app.use("/api", router);
// app.use('/',(req,res,next)=>{

// console.log("request===>",req.originalUrl, "method===>",req.method)
// next()

// })

// let users=[]

// app.delete("/api/user/:id",(req,res)=>{
//    try {
//       const {id}=req.params;

//       users=users.filter((obj)=>obj.id !== id)
//       res.send({message:"user has been deleted"})
//    } catch (error) {
//       res.send({message:"something went wrong"})
//    }
// })
// app.get("/api/users",(req,res)=>{

//    res.send(users)

//    })

//    app.put("/api/user/:id",(req,res)=>{
//       try {
//          const {id}=req.params;
//          const index=users.findIndex((obj)=>obj.id === id)
//          users.splice(index,1,{...req.body,id:id})
//          res.status(201).send({status:201,...req.body,message:"user has been updated"})

//       } catch (error) {
//        res.send({message:"something went wrong"})
//       }
//    })

//    app.post("/api/user",async(req,res)=>{
//     try {
//       await userSchema.validateAsync(req.body)
//         users.unshift({...req.body,id:Date.now().toString(36)})
//         console.log(req.body)
//         res.send({message:"user has been added"})
//     } catch (error) {
//       res.status(400).send({error:error.details || "something went wrong",status:400})
//     }

//    })

app.listen(port, () => {
  console.log("port is running at ", port);
});
