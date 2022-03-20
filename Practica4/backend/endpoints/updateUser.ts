import { Collection, Db } from "mongodb";
import { IUser } from "../src/mongotypes";
import { Request, Response } from "express";
import { app } from "../src/server";
  /*
  const updateUser = ( async(req: Request, res: Response)=> {
      try{
          const db: Db = app.get("db");
          const UserCollection: Collection<IUser> = db.collection<IUser>("User");
          const matchedCount = await UserCollection.findOne({name:String(req.params.name), surname:String(req.params.surname), mail:String(req.params.mail)});
          if(matchedCount){
            await UserCollection.updateOne({matchedCount}, {$set: {name:String(req.params.name), surname:String(req.params.surname), mail:String(req.params.mail)}})
            return res.status(200).send("OK")
          }else{
            return res.status(404).send("Error");
          }
      }catch(e){
          console.log(e);
      }
  })
  
  
  export default updateUser;
  */