const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/constants');
const { connect } = require('./commons/services/mongoosedb');

const base = require('./routes/base');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api',base);

connect();
app.listen(PORT,()=>console.log(`server is listening on http://localhost:${PORT}`));