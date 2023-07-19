const fs = require('fs');
const data = require("../model/data.model");

const dataController = {
    getAll: async (req, res) => {
        try{
            const datas = await data.find();
            res.json(datas);
        }catch(e){
            res.status(500).json({message: "find error " + e});
        }
    },
    getById: async (req, res ) => {
        try {
            const { id } = req.params;
            await data.findById({_id: id})
                .then( function (data){
                    return res.status(200).json(data);
                }).catch( e => {
                return res.status(404).json(e);
            });
        } catch(e) {
            res.status(500).json({message: "get by id error " + e});
        }
    },
    create: async (req, res) => {
        try{
            const { name } = req.body;
            const file = req.file;
            const img = new data({name, src: file.path, });
            await img.save();
            res.json(img);
        }catch(e){
            res.status(500).json({message: "create error "+e});
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const file = req.file;
            await data.findByIdAndUpdate({_id: id}, {name: name, file: file})
                .then( function(data){
                    return res.status(200).json(data);
                })
                .catch(function (err){
                    return res.status(404).json(err);
                });
        }catch(e) {
            res.status(500).json({message: "update error "+ e});
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id;

            await data.findByIdAndDelete({_id: id}).then(function (data){
                console.log('data', data);
                fs.unlinkSync(data.src);
                return res.status(200).json(data);
            }).catch(function (err){
                return res.status(404).json(err);  
            });
        }catch(e){
            res.status(500).json({message: "remove error" + e});
        }
    },
}

module.exports = dataController;