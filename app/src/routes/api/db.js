
import { MongoClient, ServerApiVersion } from "mongodb"


export async function post ({request}) {
    let body = await request.json();
   
    console.log("asdf")
    //console.log(body.hello);
    const uri = "mongodb+srv://ethano:"+import.meta.env.VITE_MONGO_PASSWORD+"@cluster0.vw7lv.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect().then(() => console.log('connected'))
    const database = await client.db('emails');
    const collection = await database.collection(import.meta.env.VITE_ENV_TYPE)
    await collection.insertOne({body})
    await client.close().then(() => console.log('disconnected'))


    
    
    

    return {status: 200, body: {
        data: "a"
    }}
}