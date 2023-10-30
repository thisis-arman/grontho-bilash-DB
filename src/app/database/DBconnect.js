const { MongoClient, ServerApiVersion } = require('mongodb');
let db;

const DBconnect = async() => {
    if(db) return db;
   

async function run() {
  try {  
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.PASS}@cluster0.kwah0lw.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  return db;
}
catch(error){
    console.log(error.message)
}
// run().catch(console.dir);

};

export default DBconnect;