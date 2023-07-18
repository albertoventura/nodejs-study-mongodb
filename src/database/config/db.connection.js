/* var mongo = require('mongodb');

var mongoConnection = {
    connection: () => {
        console.log('conectou');

        var db = new mongo.Db(
            'study',
            new mongo.Server('localhost',27017,{}),
            {}
        );

        return db;
    }
}

module.exports = mongoConnection; */

/* const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const dbName = "study";
const client = new MongoClient(uri);
let db;
async function run(){
    try{
        await client.connect();
        console.log("conectado com o banco");
        try {
            db = client.db(dbName);
            return db            
        } catch(e) {
            console.log("deu ruim no client.db", e);
        }
    }catch(e){
        console.log("deu ruim", e);
    }
}
run();
module.exports = client; */

const { MongoClient, ObjectId } = require("mongodb");
const host = "mongodb://localhost:27017";
const dbName = "study";
let singleton;
const COLLECTION = "users";

async function connect() {
    if (singleton) return singleton;
    console.log('4444');
    const client = new MongoClient(host);
    try {
        
        await client.connect();
        try {
            singleton = client.db(dbName);
            console.log('ssss');
            return singleton;
        }catch(e) {
            console.log('ee');
        }
    } catch(e){
        console.log('e');
    }

    
}

const TAMANHO_PAGINA = 5;

async function findAll() {
    
    console.log('##');
    
    //const tamanhoSkip = TAMANHO_PAGINA * (pagina - 1);

    const db = await connect();
    
    return db.collection(COLLECTION)
        .find()
        .toArray();
    /* return db.collection(COLLECTION)
        .find()
        .skip(tamanhoSkip)
        .limit(TAMANHO_PAGINA)
        .toArray(); */
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

async function countAll() {
    const db = await connect();
    return db.collection(COLLECTION).countDocuments();
}

module.exports = { findAll, insert, findOne, update, deleteOne, countAll, TAMANHO_PAGINA }