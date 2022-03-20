import { IUser } from "../src/mongotypes";
import { Request, Response } from "express";
import { Collection, Db } from "mongodb";
import { app } from "../src/server";

const postUser = async (req: Request, res: Response) =>{
    try{
        const db:Db = app.get("db");
        const UserCollection: Collection<IUser> = db.collection<IUser>("User");
        const user : IUser |null = await UserCollection.findOne({name: req.body.name, surname: req.body.surname, mail: req.body.mail});
        if(!user){
           const newObj: IUser = {
               name: req.body.name,
               surname: req.body.surname,
               mail: req.body.mail
           }
               await UserCollection.insertOne(newObj);    
               res.status(200).send("Ok");
                    
        }else{
            res.status(404).send("Error")
        }
     
    }catch(e){console.log(e); res.status(500).send("Error")}}

    export default postUser;