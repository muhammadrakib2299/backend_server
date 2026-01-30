const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// midleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://rakib152944:Apn8hvbk4ZcpYak1@cluster0.trlhdyr.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    app.post("/users", (req, res) => {
      console.log("data in the server", req.body);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Simple CRUD Server runnig");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
