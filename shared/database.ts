
import { MongoClient } from "mongodb";
let dbClient: MongoClient | undefined;

export async function initDbClient() {
    try {
        dbClient = await MongoClient.connect("mongodb://localhost:27017/KZILLA");
        return dbClient;
    }catch (error) {
        console.log(error)
    }
  }
  
export async function getDbClient() {
    if (!dbClient) {
        await initDbClient();
    }
    return dbClient;
}

export async function closeDbConnection() {
    const client = await getDbClient();
    client!.close()
    dbClient = undefined;
}