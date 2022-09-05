const express = require('express');
var User = require("./models/user")
const app = express();

const port = process.env.port || 4000;

app.use(express.json());

app.get('/',function(req,res){
    res.status(200).send("Hellow World");
});

User.sync()
// // User.sync({ force: true});
// User.sync({ alter: true })
// User.drop();
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
// Synchronizing all models at once
// You can use sequelize.sync() to automatically synchronize all models. Example:
// await sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.");
// await sequelize.drop();
// console.log("All tables dropped!");

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

