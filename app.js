const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')))

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


app.listen(PORT, () => console.log(`Corriendo el servidor: ${PORT}`));
