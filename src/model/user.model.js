var connection = require('../database/config/db.connection');
/* var mongo = require('mongodb'); */

const usuarioDAO = {
    create: async (data) => {
        console.log('dentro do dao', data);
        /* var db = new mongo.Db(
            'study',
            new mongo.Server('localhost',27017,{}),
            {}
        ); */
        var db = await connection;
        console.log('passou', db);
        /* db.open( (err, mongoclient) =>{
            console.log('err open', err);
            mongoclient.collection("usuarios", (err, collection) => {
                console.log('err col', err);
                console.log('dentro do col', data);
                collection.insert(data);
                mongoclient.close();
            });
        }); */
    }
}

module.exports = usuarioDAO;