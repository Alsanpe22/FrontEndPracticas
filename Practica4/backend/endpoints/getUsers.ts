import { Collection, Db } from "mongodb";
import { IUser } from "../src/mongotypes";
import { Request, Response } from "express";
import { app } from "../src/server";

const getUsers = async(req: Request, res: Response) => {
    try{
        const db: Db = app.get("db");
        const UserCollection: Collection<IUser> = db.collection<IUser>("User");
        const allUsers = (await UserCollection.find({}).toArray()).map((elem) => {
            return{
                name: elem.name,
                surname: elem.surname,
                mail: elem.mail,
            }
        });
        return res.status(200).send(allUsers);
    }catch(e){
        console.log(e);
    }
}


export default getUsers;