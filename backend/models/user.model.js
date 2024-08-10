import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 8,
            maxlength: 100,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
