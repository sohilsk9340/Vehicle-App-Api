const{ default: mongoose } =require("mongoose");
const register = require("./register");
const status = require("./status")
const Database_Name = process.env.Database_Name||"vehicle";

const URI = process.env.Mongo||"mongodb+srv://vehicle:vehicle@cluster0.elwmgmk.mongodb.net"
const Mongo = `${URI}/${Database_Name}`;

mongoose.connect(Mongo).then(() => console.log("connected")).catch((err) => console.log(err))

const register1 = mongoose.model('register', register, 'register1');
const status1 = mongoose.model('status', status, 'status1');

module.exports = {register1,status1};