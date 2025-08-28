import { MongoClient } from "mongodb";
import { ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request) {

    // Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://tariqMasood:tms@16103@travest.lydwn8n.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("users").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



    return NextResponse.json({"a": 33})
}


