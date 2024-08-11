import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import { toast } from "react-toastify";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Missing Fields, Please fill all missing fields!");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        toast.error("Signup failed. Please try again!");
      } else {
        toast.success("Signup successful!");
        if (res.ok) {
          // Navigate to the login page or dashboard
          navigate('/login'); // Update this path as needed
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-gray-500 to-blue-500 rounded-lg text-white">
              CodeMasters
            </span>
            Blog
          </Link>
          <p className="font-bold text-xstext-sm mt-5">
            Welcome To Code Masters Blog.
            <span className="text-sm font-medium">
              <br /> You can choose between Sign Up using your email or with
              Google.
            </span>
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Your username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Your email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Your password"
                id="password"
                onChange={handleChange}
              />
              <Button
                gradientDuoTone="greenToBlue"
                type="submit"
                className="w-full mt-5"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Circles
                      height="20"
                      width="20"
                      color="#ffffff"
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                    <span className="pl-3">Loading..</span>
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
          <div className="flex gap-2 font-normal text-sm mt-5">
            <span>Already have an account?</span>
            <Link to="/login" className="text-blue-500">
              Log In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
