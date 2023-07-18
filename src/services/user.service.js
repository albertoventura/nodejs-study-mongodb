//var connection = require('../database/config/db.connection');
const usuarioDAO = require('../model/user.model');
var db = require('../database/config/db.connection');

const userService = {
    getAll: async () =>{
        
        const data = await db.findAll();
        return data
    },
    getbyId: async (id) =>{
        const data = await db.findOne(id);
        return data
    },
    create: async (user) =>{
        
        //var usercriado = usuarioDAO.create(user);
        const data = await db.insert(user);
        return data
    },
    update: async (id, user) =>{
        console.log('%%%', id, user);
        const data = await db.update(id, user);
        return data;
    },
    delete: async (id) =>{
        const data = await db.deleteOne(id)
        return data;
    },
};

module.exports = userService;