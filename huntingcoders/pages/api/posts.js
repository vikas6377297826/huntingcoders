import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("blog");
  switch (req.method) {
    case "GET":
      const posts = await db.collection("posts").find({}).toArray();
      res.status(200).json(posts);
      break;
    case "POST":
      const post = await db.collection("posts").insertOne(req.body);
      res.status(201).json(post);
      break;
    default:
      res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
