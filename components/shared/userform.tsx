'use client'

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faMessage, faCommentsDollar, faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

function UserForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="relative h-screen">
        <button
        className={`fixed top-1/2 transform -translate-y-1/2 p-2 transaction-all ease-in-out duration-500 ${isOpen ? 'left-96 max-sm:left-64' : 'left-0'}`}
        onClick={toggleSidebar}>
          {isOpen ? <FontAwesomeIcon icon={faAnglesLeft} /> : <FontAwesomeIcon icon={faAnglesRight} />}
        </button>
    </div>
    <div className={`bg-default w-96 max-sm:w-64 h-screen pt-8 pb-4 flex-shrink-0 transition-all ease-in-out duration-500 ${isOpen? 'translate-x-0' :'-translate-x-full'}`}>
        {isOpen &&(
          <div className="absolute flex flex-col text-xl">
            <div className="flex flex-wrap text-white items-center w-full">
              <FontAwesomeIcon icon={faUser} className="mr-4 text-2xl" />
              Hello, User
              <FontAwesomeIcon icon={faBell} className="ml-48 mr-9 max-sm:ml-16 text-2xl" />
            </div>
            <div className="my-4"></div>
            <div className="text-white bg-extra-dark w-full pb-2 pt-1">
            <FontAwesomeIcon icon={faMessage} className="mr-3" />
              Discussion Forum
            </div>
            <div className="text-white">
            <FontAwesomeIcon icon={faCommentsDollar} className="mr-2 pb-2 pt-2" />
              Market Stories
            </div>
            <div className="text-white ml-8 pb-2 pt-2 ">
              Sentiment
            </div>
            <div className="text-white ml-8 pb-2 pt-2">
              Sector
            </div>
            <div className="text-white ml-8 pb-2 pt-2">
              Watchlist
            </div>
            <div className="text-white ml-8 pb-2 pt-2">
              Events
            </div>
            <div className="text-white ml-8 pb-2 pt-2">
              News/Interview
            </div>
          </div>
        )}
    </div>
    </>
  )
}

export default UserForm;