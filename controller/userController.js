const mssql = require('mssql')
const jwt = require('jsonwebtoken')
const config = require('../config/db')
const {v4 : uuidv4} = require('uuid')
const schema = require('../helper/validation')
const bcrypt = require('bcrypt')

async function getUsers(req, res){
    try{
        let pool = await mssql.connect(config)
        const result = await pool.request().execute('getUsers');
        res.send(result.recordsets)
    }
    catch(error){
        console.log(error);
    }
}
async function getAUser(req, res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        const result = await pool.request()
        .input('id', id)
        .execute('getAUser');
        res.send(result.recordsets)
    }
    catch(error){
        console.log(error);
    }
}
async function createUser(req, res){
    const {username, fullname, telno, email, pswd}= req.body
    const userid = uuidv4()
    try{
        await schema.registerSchema.validateAsync(req.body)
        try{
            let pool = await mssql.connect(config)
            await pool.request()
            .input('id', userid)
            .input('username', username)
            .input('fullname', fullname)
            .input('telno', telno)
            .input('email', email)
            .input('pswd', bcrypt.hashSync(pswd, 8))
            .execute('createUser')
            res.json('Data inserted successfully')
        }
        catch(error){
            console.log(error);
        }
    }catch(error){
        res.status(400)
        .send({success: false,
        message: error.details[0].message});
    }
    
    
}
async function updateUser(req, res){
    const {username, fullname, telno, email, pswd}= req.body
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', id)
        .input('username', username)
        .input('fullname', fullname)
        .input('telno', telno)
        .input('email', email)
        .input('pswd', bcrypt.hashSync(pswd, 8))
        .execute('updateUser')
        res.json('Data updated successfully')
    }catch(error){
        console.log(error);
    }
}
async function deleteUser(req, res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', id)
        .execute('deleteAUser');
        res.json('Data deleted successfully')
    }
    catch(error){
        console.log(error);
    }
}
async function loginUser(req, res){
    const {username, pswd} = req.body
    try{
        await schema.schema.validateAsync({username: username, pswd: pswd})
        try{
            let pool = await mssql.connect(config)
            const result = await pool.request()
            .input('username', username)
            .execute('loginuser')
            const user01 = result.recordset[0]
            if (!user01) res.status(400).send({message: "user does not exist"})

            // console.log(user01.email);

            const validpswd =  await bcrypt.compare(pswd, user01.pswd)
            if(!validpswd) return res.send('invalid credentials')

            const token = jwt.sign(user01, process.env.SECRET_KEY)
            res.send({user01, token})
        }catch(err){
            console.log(err);
        } 
    }catch(err){
        res.status(400)
        .send({success: false,
        message: err.details[0].message})
    }
    
}
module.exports={
    getUsers,
    getAUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}