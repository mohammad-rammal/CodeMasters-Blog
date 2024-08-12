import { Sidebar } from "flowbite-react"
import { useEffect, useState } from "react";
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom";


function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParamas = new URLSearchParams(location.search)
        const tabFromUrl = urlParamas.get('tab');

        if (tabFromUrl) {
            setTab(tabFromUrl)
        }

    }, [location.search])

    return (
        <Sidebar className="w-full md:w-56 ">
            <Sidebar.Items>
                <Sidebar.ItemGroup >
                    <Link to='/dashboard?tab=profile' className=" flex flex-col gap-3">
                        <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={"User"} labelColor='blue'>
                            <span className="font-medium hover:text-blue-500">Sign Out</span>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer ' >
                            <span className="text-red-500 font-semibold">Sign Out</span>
                        </Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar >
    )
}

export default DashSidebar