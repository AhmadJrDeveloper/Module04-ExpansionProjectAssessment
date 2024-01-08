import bcrypt from 'bcrypt';
export const createUserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_type:{
            type: DataTypes.ENUM('user', 'admin'),
            allowNull: false,
        },
    })
    
    User.comparePassword = async function (pass,passdb) {
        return await bcrypt.compare(pass,passdb)      };
    return User
};

export default createUserModel