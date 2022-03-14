const mssql = require('mssql')
const config = require('../config/db')
const {v4 : uuidv4} = require('uuid')

async function getParcels(req, res){
    try{
        let pool = await mssql.connect(config)
        const result = await pool.request().execute('getParcels');
        res.send(result.recordsets)
    }
    catch(error){
        console.log(error);
    }
}
async function getAParcel(req, res){
    const pid = req.params.pid
    try{
        let pool = await mssql.connect(config)
        const result = await pool.request()
        .input('pid', pid)
        .execute('getAParcel');
        res.send(result.recordsets)
    }
    catch(error){
        console.log(error);
    }
}
async function createParcel(req, res){
    const {senderid, pdescription,senderno, receiverno, startloc,endloc}= req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('pid', uuidv4())
        .input('senderid', senderid)
        .input('pdescription', pdescription)
        .input('senderno', senderno)
        .input('receiverno', receiverno)
        .input('startloc', startloc)
        .input('endloc', endloc)
        .execute('createParcel')
        res.json('Data inserted successfully')
    }
    catch(error){
        console.log(error);
    }
}
async function updateParcel(req, res){
    const {pid, pdescription,senderno, receiverno, startloc,endloc}= req.body
    const senderid = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('pid', pid)
        .input('senderid', senderid)
        .input('pdescription', pdescription)
        .input('senderno', senderno)
        .input('receiverno', receiverno)
        .input('startloc', startloc)
        .input('endloc', endloc)
        .execute('updateParcel')
        res.json('Data updated successfully')
    }catch(error){
        console.log(error);
    }
}
async function deleteAParcel(req, res){
    const pid = req.params.pid
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('pid', pid)
        .execute('deleteAParcel');
        res.json('Data deleted successfully')
    }
    catch(error){
        console.log(error);
    }
}
module.exports={
    getParcels,
    getAParcel,
    createParcel,
    updateParcel,
    deleteAParcel
}