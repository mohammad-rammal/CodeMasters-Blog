import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs"
import { FaLink } from "react-icons/fa";

function FooterD() {
    return (
        <Footer container className="border border-t-8 border-blue-300">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link
                            to="/"
                            className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
                        >
                            <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-gray-500 to-blue-500 rounded-lg text-white">
                                CodeMasters
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://mohammad-rammal-portfolio.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mohammad Rammal
                                </Footer.Link>
                                <Footer.Link href="/about">CodeMasters Blog</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow Us" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://www.linkedin.com/in/mohammad-rammal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </Footer.Link>
                                <Footer.Link
                                    href="https://github.com/mohammad-rammal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </Footer.Link>


                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Policy and Terms" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="#"
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href="#"
                                >
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Mohammad Rammal" year={new Date().getFullYear()} />
                    <div className="flex flex-row gap-6 sm:mt-2 mt-4 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/mohmd.rammal/" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/mohmd.rammal/" icon={BsInstagram} />
                        <Footer.Icon href="https://www.linkedin.com/in/mohammad-rammal/" icon={BsLinkedin} />
                        <Footer.Icon href="https://github.com/mohammad-rammal" icon={BsGithub} />
                        <Footer.Icon href="https://www.youtube.com/@mohamad-rammal" icon={BsYoutube} />
                        <Footer.Icon href="https://linktr.ee/mohammad.rammal" icon={FaLink} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default FooterD;
