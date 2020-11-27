const express = require("express");
const fs = require("fs");
const loader = require('./utils/loader.js');
const writer = require('./utils/writer.js');
const services = require('./utils/services.js')

const server = express();
server.use(express.json());

console.log("server is start!");

server.get("/conditions", loader); 

server.post('/addConditionList', (req,res) => {
    fs.readFile('./db/conditionlist.json', 'utf-8', (err, data)=>{
        if (!err) {
            let currentList = JSON.parse(data);
            let updateList = services.add(currentList, req.body);
            writer('./db/conditionlist.json', updateList)
            .then(answer => {
                if(answer){
                    res.json({status: true});
                }else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.listen(3000);
