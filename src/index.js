const express = require ('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const { registerUser, getUser, generateQrcode } = require('./controllers/users');




app.use(cors())
app.use(express.json())

app.post('/qrcode', generateQrcode)
app.post('/register', registerUser)
app.get('/:id/:name', getUser)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server Runnig...');
})

