const sequelize = require("./index");
const {DataTypes} = require("sequelize");
const moment = require("moment");
const Student = sequelize.define("users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
    }, {
    // Other model options go here
    // tableName: "users"
    // timestamps: false
})
// timestamps: false, 

Student.beforeCreate(function(student){
    student.getDataValues.createdAt = moment().unix();
    student.getDataValues.updatedAt = moment().unix();
})
Student.beforeUpdate(function(student){
    student.getDataValues.updatedAt = moment().unix();
});


console.log(Student === sequelize.models.Student)
module.exports = Student;