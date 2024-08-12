import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function DashProfile() {
    const { currentUser } = useSelector((state) => state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    }
    
    return (
        <div className="max-w-lg mx-auto p-3 w-full ">
            <h1 className="text-4xl my-7 text-center font-bold animate-pulse">
                Profile
            </h1>

            <form className="flex flex-col gap-3 ">
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
                    <img
                        src={imageFileUrl || currentUser.profilePicture}
                        alt="user profile"
                        className="rounded-full w-full h-full object-cover border-8 border-[lightblue]"
                    />
                </div>
                <TextInput type="text" id="username" placeholder="username"
                    defaultValue={currentUser.username} />
                <TextInput type="email" id="email" placeholder="email"
                    defaultValue={currentUser.email} />
                <TextInput type="password" id="password" placeholder="password"
                    defaultValue='*************************' />

                <Button type="submit" gradientDuoTone='greenToBlue' outline className="animate-pulse" >
                    Update
                </Button>
            </form>
            <div className="text-red-500 flex font-medium justify-between mt-5 px-2">
                <div className="cursor-pointer hover:text-red-600">Remove Account</div>
                <div className="cursor-pointer  hover:text-red-600" >Sign Out</div>
            </div>
        </div>
    );
}

export default DashProfile;
