import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { FaBlogger } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";

function Header() {
    const path = useLocation().pathname;
    const { currentUser } = useSelector(state => state.user)
    const { theme } = useSelector(state => state.theme)
    const dispatch = useDispatch();

    console.log('theme', theme)
    return (
        <Navbar className="border-b-2 py-1  lg:px-5">
            <Link
                to="/"
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
                <span className="px-2 py-1 animate-pulse bg-gradient-to-r from-green-500 via-gray-500 to-blue-500 rounded-lg text-white">
                    CodeMasters
                </span>
                Blog
            </Link>

            <form>
                <TextInput
                    type="text"
                    placeholder="Search for anything.."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                    
                />
            </form>

            <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                <AiOutlineSearch />
            </Button>

            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline dark:bg-transparent" color="gray"  pill onClick={() => dispatch(toggleTheme())}>
                    {theme === 'light' ? <FaSun /> : <FaMoon  />}

                </Button>
                {
                    currentUser ? (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar
                                    alt="user profile"
                                    img={currentUser.profilePicture}
                                    rounded
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm font-medium">{currentUser.username}</span>
                                <span className="block text-sm font-bold truncate">{currentUser.email}</span>
                            </Dropdown.Header>
                            <Link to={'/dashboard?tab=profile'}>
                                <Dropdown.Item className=" text-sm font-medium">Profile</Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-red-500 font-medium">Sign Out</Dropdown.Item>
                        </Dropdown>
                    ) : (<Link to="/sign-in">
                        <Button className="border-blue-200 bg-gradient-to-l from-green-200 to-blue-200  text-black hover:bg-gradient-to-l hover:text-white hover:from-green-500 hover:to-cyan-500 hover:border-green-500 border ">
                            Sign In
                        </Button>
                    </Link>)
                }

                <Navbar.Toggle />
            </div >

            <Navbar.Collapse className="md:flex md:w-44 md:space-x-4 ">
                <Navbar.Link
                    as={Link}
                    to="/"
                    className={`block text-sm ${path === "/"
                        ? "text-blue-500 font-bold  "
                        : "text-gray-700"
                        } hover:text-blue-500 hover:bg-blue-300 md:hover:bg-white p-2 rounded-md`}
                >
                    <div className="flex justify-between">

                        Home <IoMdHome className="md:hidden" size={24} />
                    </div>
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    to="/about"
                    className={`block my-3 md:my-0 text-sm ${path === "/about"
                        ? "text-blue-500 font-bold  "
                        : "text-gray-700"
                        } hover:text-blue-500 hover:bg-blue-300 md:hover:bg-white p-2 rounded-md`}
                >
                    <div className="flex justify-between">
                        About <SiAboutdotme className="md:hidden" size={22} />
                    </div>
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    to="/projects"
                    className={` block text-sm ${path === "/projects"
                        ? "text-blue-500 font-bold  "
                        : "text-gray-700"
                        } hover:text-blue-500 hover:bg-blue-300 md:hover:bg-white p-2 rounded-md`}
                >
                    <div className="flex justify-between">
                        Projects <FaBlogger className="md:hidden" size={24} />
                    </div>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;
