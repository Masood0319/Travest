import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("✅ API HIT:", body);

    const client = await clientPromise;
    const db = client.db("travest"); // your db name from URI
    const collection = db.collection("users");

    const result = await collection.insertOne(body);
    console.log("✅ Insert Result:", result);

    return Response.json({ success: true, result });
  } catch (err) {
    console.error("❌ Error inserting:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}