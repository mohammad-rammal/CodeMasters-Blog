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
        },
        profilePicture: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
