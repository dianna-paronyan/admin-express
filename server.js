const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})