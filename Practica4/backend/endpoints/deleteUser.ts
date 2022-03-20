import { Collection, Db } from "mongodb";
import { IUser } from "../src/mongotypes";
import { Request, Response } from "express";
import { app } from "../src/server";


const deleteUser = ( async(req: Request, res: Response)=> {
    try{
        const db: Db = app.get("db");
        const UserCollection: Collection<IUser> = db.collection<IUser>("User");
        //  console.log(req.body.name) para comprobar como te llegan los datos.
        const {deletedCount} = await UserCollection.deleteOne({"name":req.body.name, "surname":req.body.surname, "mail":req.body.mail});

        if(!deletedCount){
            res.status(404).send("Not found")
          } res.status(200).send("OK")
         

    }catch(e){
        console.log(e);
    }
})


export default deleteUser;