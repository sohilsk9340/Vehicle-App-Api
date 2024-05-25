const bodyParser = require('body-parser');
const express = require('express');
const {register1, status1} = require('./db/body');
const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Endpoint
app.post('/register', async (req, res) => {
    const  body= req.body;

    const register = await register1.create({
        owner: body.owner,
        numberPlate: body.numberPlate,
        chassie: body.chassie,
        brand: body.brand,
        date: body.date,
    });

    register ? res.status(201).json({msg: "Success", data: register}) : res.status(500).json({msg: "Error", data: register})
})

app.get('/status', async (req, res) => {
    const  body= req.body;

    const status = await status1.create({
        vehicleStatus: body.vehicleStatus,
        engineHealth: body.engineHealth,
        expirePollution: body.expirePollution,
        accident: body.accident
    });

    status ? res.status(201).json({msg: "Success", data: status}) : res.status(500).json({msg: "Error", data: status})
})

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))