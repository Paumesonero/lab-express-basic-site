const { request } = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.static('views'));
app.get('/', (request, res, next) => {

    res.sendFile(__dirname + '/views/home.html')
})









app.listen(3000, () => console.log('🚀 My first app listening on port 3000! '));