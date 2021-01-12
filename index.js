
const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/constants');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.listen(PORT,()=>console.log(`server is listening on http://localhost:${PORT}`));