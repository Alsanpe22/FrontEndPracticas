import { MongoClient } from "mongodb";
import mongoConnect from "./mongoconnect";
import express from "express";
import getUsers from "../endpoints/getUsers"
import postUser from "../endpoints/postUser";
import cors from "cors"
import deleteUser from "../endpoints/deleteUser";




export const app = express();

const run = async()=>{
    try{
        const client: MongoClient = await mongoConnect("mongodb+srv://alsanpe:nebrija@clusternebrija.qdkdq.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        app.set("db", client.db("User"));
    }catch(e){ console.log(e)}
}


    run();
    app.use(express.json());
    app.use(cors());
    app.get("/users", getUsers);
    app.post("/postUser", postUser);
    app.delete("/deleteUser", deleteUser);
  //  app.post("/updateUser", update)
    
    
    
    app.listen({port:8000}, () => {
        console.log('The application is listening on port 8000!');
       })
       




