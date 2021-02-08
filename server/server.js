require('./config/config');
const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/user',(req, res)=> {
    res.json("get user")
});

app.post('/user',(req, res)=> {
    const body = req.body;
    if(body.name) {
        res.json({body});
    } else {
        res.status(400).json({
            ok: false,
            message: "name is required"
        });
    }
});

app.put('/user/:id',(req, res)=> {
    const id = req.params.id;
    res.json(`put user ${id}`)
});

app.delete('/user/:id',(req, res)=> {
    const id = req.params.id;
    res.json(`delete user ${id}`);
});

app.listen(process.env.PORT,()=> {
    console.log(`listening to port ${process.env.PORT}`);
})