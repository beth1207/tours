const client = require('../model/register')
// const getClients =(req,res)=>{
//     res.send('I am getting Clients')
// }

/**
 * 
 * READ FUNCTIONALITY 
 */
const getClients= (req,res)=>{
    client.find((err,clients)=>{
        if(err){
            res.send(err)
        }
        res.json(clients)
    });
};

/**
 * 
 * CREATE FUNCTIONALITY 
 */
const createClients =(req,res)=>{

    const newClient = new client({
        name: req.body.name,
        location: req.body.location,
        servicesOffered: req.body.servicesOffered,
        spaceAvailable: req.body.spaceAvailable,
        daysTime: req.body.daysTime,
        importantNotice:req.body.importantNotice
    });

    newClient.save((err,newClient)=>{
        if(err){
            res.send(err)
        }
        else
        res.json(newClient)

    })

    }

    /**
 * 
 * UPDATE FUNCTIONALITY
 */

    const editClients=(req,res)=>{
        client.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    name: req.body.name,
                    location: req.body.location,
                    servicesOffered: req.body.servicesOffered,
                    spaceAvailable: req.body.spaceAvailable,
                    daysTime: req.body.daysTime,
                    importantNotice:req.body.importantNotice
                },
            },
            {new:true},
            (err, client)=>{
                if(err){
                    res.send(err);
                }
                else res.json(client);
            }
        );
    };

    /**
 * 
 * DELETE FUNCTIONALITY
 */


module.exports ={
    getClients, createClients,editClients
};