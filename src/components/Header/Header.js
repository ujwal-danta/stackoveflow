import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
            alt='logo' />
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon/>
            <input type="text" placeholder='Search...' />
          </div>

        </div>
        <div className="header-right">
         <div className="header-right-container">
           <Avatar/>
           <InboxIcon/>
         </div>
        </div>
      </div>
    </header>
  )
}

export default Header