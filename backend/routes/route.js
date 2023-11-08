const {getClients, createClients,editClients} = require ('../controllers/crud')


const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Irene is building an API')
})

router.post('/clients', createClients);//create
router.get('/clients', getClients); //read
router.put('/clients/:clientID', editClients); //update
//router.delete('/todos', deleteClients); //delete

module.exports=router;