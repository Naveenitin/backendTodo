const express = require('express');
const app = express();

// app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`This is the complete list of todos`);
});

app.post('/add', (req, res) => {
    res.send(`Recived post request to add todo`);
});

app.delete('/todos/:id', (req, res) => {
    res.send(`This is the delete ${JSON.stringify(req.params)}`);
    console.log(req.params);
});


app.get('/list', (req, res) => {
    res.send(`This is the complete list of todos`);
});

app.listen(3000, () => {
    console.log("Backend server is started on server port 3000");
})
