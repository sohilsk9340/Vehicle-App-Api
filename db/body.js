const{ default: mongoose } =require("mongoose");
const register = require("/.register");
const DataBase_Name = process.env.DataBase_Name||"vehicle";

const URI = process.env.Mongo||"mongodb+srv://vehicle:vehicle@cluster0.elwmgmk.mongodb.net"
const Mongo = `${URI}/${DataBase_Name}`;

mongoose.connect(Mongo).then(() => console.log("connected")).catch((err) => console.log(err))

const register1 = mongoose.model('register', register, 'register1');

module.exports = {register1};