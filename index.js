const express = require ('express')
const app = express()
const userRoute = require ('./routes/userRoute')
const parcelRouter = require('./routes/parcelRouter')

app.use(express.json())
app.use('/users1', userRoute);
app.use('/parcel1', parcelRouter);
app.listen(4000, ()=>{
    console.log('Running...');
})

