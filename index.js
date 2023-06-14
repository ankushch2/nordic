const express = require('express');
const app = express();
//define port
const port=5000

app.get('/', function(req, res){
    res.send('Hello World');

});

// const app = express();
// app.use(express.static('public/'));
app.listen(port)
