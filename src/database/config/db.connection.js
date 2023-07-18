const { MongoClient, ObjectId } = require("mongodb");
const host = "mongodb://localhost:27017";
const dbName = "study";
let singleton;
const COLLECTION = "users";

async function connect() {
    if (singleton) return singleton;
    const client = new MongoClient(host);
    try {
        
        await client.connect();
        try {
            singleton = client.db(dbName);
            return singleton;
        }catch(e) {
            console.log('ee');
        }
    } catch(e){
        console.log('e');
    }

    
}

async function findAll() {
    
    const db = await connect();
    return db.collection(COLLECTION)
        .find()
        .toArray();
}

async function insert(customer) {
    const db = await connect();
    return db.collection(COLLECTION).insertOne(customer);
}

async function findOne(id) {
    const db = await connect();
    return db.collection(COLLECTION).findOne({_id: new ObjectId(id)});
}

async function update(id, customer) {
    const db = await connect();
    return db.collection(COLLECTION).updateOne({ _id: new ObjectId(id) }, { $set: customer });
}

async function deleteOne(id) {
    const db = await connect();
    return db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
}

module.exports = { findAll, insert, findOne, update, deleteOne }