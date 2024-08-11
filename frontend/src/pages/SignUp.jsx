import { Link } from "react-router-dom"
import { Button, Label, TextInput } from "flowbite-react";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left Side */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-4xl font-bold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-gray-500 to-blue-500 rounded-lg text-white">
              CodeMasters
            </span>
            Blog
          </Link>
          <p className="font-bold text-xstext-sm mt-5">
            Welcome To Code Masters Blog.
            <span className="text-sm font-medium"><br></br> You can choose between Sign Up using your email or with Google.</span>
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Your usename"
                id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="Your email"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="text"
                placeholder="Your password"
                id="password"
              />
              <Button
                gradientDuoTone="greenToBlue"
                type="submit"
                className="w-full mt-5"
              >
                Sign Up
              </Button>
            </div>
          </form>
          <div className="flex gap-2 font-normal text-sm mt-5">
            <span>Already have an account?</span>
            <Link to='/sign-up' className="text-blue-500">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp