const userService = require('../services/user.service');

const userController = {
    getAll: async (req, res) => {
        try {
            const data = await userService.getAll();
            res.json(data)
        } catch(e){

        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await userService.getbyId(id)
            res.json(data);
        } catch(e){
            
        }
    },
    create: async (req, res) => {
        try {
            var user = req.body;
            console.log(user);
            const data = userService.create(user);
            res.json(data);
        } catch(e){
            
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, age } = req.body;

            const data = await userService.update(id, { name , age });
            res.json(data);
            
        } catch(e){
            
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await userService.delete(id);
            res.json(data);
        } catch(e){
            
        }
    },

};





module.exports = userController;