import {db} from '../models/index.js';
import { generateToken } from '../utils/jwt.js';
import bcrypt from "bcrypt";
const User = db.Users;
export const signup = async (req, res) => {
    const { name, password,user_type } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { name } });
        if (existingUser) {
            return res.status(400).json({ message: 'name already in use' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedPasswordValue = hashedPassword;
        // Create new user
        const user = await User.create({ name, password:hashedPasswordValue,user_type });
        

   

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await User.findOne({ where: { name } });
        if (!user || !(await User.comparePassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid name or password' });
        }
        const token = generateToken(user);

        res.cookie('token', token, { httpOnly: true,secure: true,
        sameSite: 'None',}).json({status:200, message: 'Login successful', token:token}).status(200)
        
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loggedInUser = (req,res) =>{

        res.json({ user: req.user });
   
}

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message:'Logged out'});
}