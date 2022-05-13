const { ApolloServer, gql } = require("apollo-server");
const { MongoClient } = require("mongodb");





const typeDefs = gql`
    type Person{
        _id: ID!
        name: String!
        surname: String!
        phone: String!
        mail: String!
    }

    type Query{
        test: String
        getPersons: [Person!]!
    }

    type Mutation{
        addPerson(name: String, surname: String, phone: String, mail: String): Person!
        deletePerson(mail: String): Boolean!
    } 
`

const resolvers = {
    Query: {
        test: () => "Working",
        getPersons: async (parent, args, ctx) => {
            const db = ctx.db;
            return db.collection("persons").find({}).toArray();
        }
    },
    Mutation: {
        addPerson: async (parent, args, ctx) => {
            const db = ctx.db;
            const { name, surname, phone, mail } = args;
            const {insertedId} = await db.collection("persons").insertOne({ name, surname, phone, mail });
            return {name, surname, phone, mail, _id: insertedId};
        },

        deletePerson: async (parent, args, ctx) => {
            const db = ctx.db;
            const { mail } = args;
            const {deletedCount} = await db.collection("persons").deleteOne({mail:String(mail)})
            if(deletedCount) return true ;
            return false;
        }
        
    }
}


const mongourl = process.env.MONGO_URL;
if(!mongourl) console.error("MONGO_URL env varible not defined");
else{
    const client = new MongoClient(mongourl);
    try{
        client.connect().then(()=>{
            console.log("Mongo DB connected");
            const server = new ApolloServer({
                typeDefs,
                resolvers,
                context: () => {return {db: client.db("test") }}
            });
            server.listen().then(({ url }) =>{
                console.log(`Servidor escuchando en ${url}`)
            })
        })
    } catch (e) {
        console.error(e)
    }
}

