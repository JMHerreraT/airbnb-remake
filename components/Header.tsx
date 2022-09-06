import { useState } from 'react'
import { Calendar } from 'react-date-range';
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {

    const [searchInput, setSearchInput] = useState('');
    const [date, setDate] = useState(new Date());
    const [noOfPeople, setNoOfPeople] = useState('1');
    const handleSelect = (date: Date) => {
        setDate(date);
    };

    const resetInput = () => {
        setSearchInput('');
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src={`https://links.papareact.com/qd3`}
                    layout={`fill`}
                    objectFit={`contain`}
                    objectPosition={`left`}
                    alt={`header`}
                />
            </div>

            {/* Middle - Search */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
                <input className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder='Start your search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {
                searchInput &&
                <div className="flex flex-col col-span-3 mx-auto mt-5">
                    <Calendar date={date} onChange={handleSelect} color={`#FD5B61`} />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl pl-2 flex-grow font-semibold">Number of people</h2>
                        <UsersIcon className="h-5" />
                        <input type="number" min={1} className="w-12 pl-2 text-lg outline-none text-red-400" value={noOfPeople} onChange={(e) => setNoOfPeople(e.target.value)} />
                    </div>
                    <div className="flex">
                        <button className="flex-grow text-sm text-white bg-gray-400 px-4 py-2 rounded-lg mt-5 mr-3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out" onClick={resetInput}>Cancel</button>
                        <button className="flex-grow text-sm text-white bg-red-400 px-4 py-2 rounded-lg mt-5 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">Search</button>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header