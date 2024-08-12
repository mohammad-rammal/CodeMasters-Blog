import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { Link, useLocation } from "react-router-dom";

function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');

        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    return (
        <Sidebar className="w-full md:w-56">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item active={tab === 'profile'} icon={HiUser} label="User" labelColor='blue' as='div'>
                            <span className="font-medium hover:text-blue-500">Profile</span>
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer' onClick={() => {/* Add your sign-out logic here */}}>
                        <span className="text-red-500 font-semibold">Sign Out</span>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default DashSidebar;
