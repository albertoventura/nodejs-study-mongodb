const fs = require('fs');
const data = require("../model/data.model");

const dataController = {
    getAll: async (req, res) => {
        try{
            const datas = await data.find();
            res.json(datas);
        }catch(e){
            res.status(500).json({message: "find erro " + e});
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
            res.status(500).json({message: "save erro"});
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id;
            /* const img = await data.findById(id);
            console.log('img', img); */
            /* data.findByIdAndDelete({_id: id}, (err, data)=>{
                if(err){
                    return res.status(404).json("error 404");                    
                }else{
                    return res.status(200).json(data);
                }
            }); */
            const f = await data.findByIdAndDelete({_id: id}).then(function (data){
                console.log('data', data);
                fs.unlinkSync(data.src);
                return res.status(200).json(data);
            }).catch(function (err){
                return res.status(404).json(err);  
            });
            /* 
            const img = await data.findById(id);
            //res.json(img);            
            if(!img){
                return res.status(404).json({ message: "img n encontrada" });
            }
            console.log('img', img);
            await img.remove();
            console.log("@@@");
            fs.unlinkSync(img.src);
            console.log('img remov', img);
            res.json({message: "img removida"}); 
            */
        }catch(e){
            res.status(500).json({message: "remove erro " + e});
        }
    },
}

module.exports = dataController;