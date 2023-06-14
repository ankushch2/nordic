const express = require('express');
const app = express();
//define port
const port=5000

app.get('/', (req, res) => {
    res.send({
        school:2,
        college:4
    });

});

app.listen(
    PORT,
    () => console.log('Server running on ${PORT}') 

);
