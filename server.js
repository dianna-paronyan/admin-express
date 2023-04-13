const express = require('express');
const { users_routes } = require('./routes/user');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());


users_routes(app);
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})