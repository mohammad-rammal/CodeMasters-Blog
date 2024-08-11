import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, 'Missing Feilds'))
    }
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })
    try {
        await newUser.save();
        res.json({ message: "Successfully Signup" })
    } catch (error) {
        next(error);
    }
}


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'Missing Feilds'))
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User Not Found'))
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, "Invalid Password"))
        }

        const token = jwt.sign(
            { id: validUser._id }, process.env.JWT_SECRET_KEY);
        const { password: pass, ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpsOnly: true,
        }).json(rest);

    } catch (error) {
        return next(error)
    }

}