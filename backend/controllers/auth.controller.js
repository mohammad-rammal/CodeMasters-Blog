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


export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
        let user = await User.findOne({ email });

        if (!user) {
            // Create a username by removing dots and concatenating the name parts
            let username = name.toLowerCase().split(' ').join('');

            // Remove any dots from the username
            username = username.replace(/\./g, '');

            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

            user = new User({
                username: username + Math.random().toString(9).slice(-4),  // Use the sanitized username
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });

            await user.save();
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

        // Destructure the user object to exclude the password
        const { password, ...rest } = user._doc;

        // Send the response with the token as a cookie
        res.status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json(rest);
    } catch (error) {
        next(error);
    }
};