const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("ahmad","root","",{
    host: "localhost",
    dialect: "mysql"
});

try{
    sequelize.authenticate();
    console.log("Connected to database");
}catch(error){
    console.log("Failed to connect to database",error);
}

module.exports = sequelize;