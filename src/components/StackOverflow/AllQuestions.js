import { Avatar } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
import './css/Allquestion.css'

function AllQuestions() {
  return (
   <div className="all-questions">
     <div className="all-questions-container">
       <div className="all-questions-left">
         <div className="all-options">
           <div className="all-option">
             <p>0</p>
             <span>Votes</span>
           </div>
           <div className="all-option">
             <p>0</p>
             <span>Answers</span>
           </div>
           <div className="all-option">
             <p>0</p>
             <small>0 Views</small>
           </div>
         </div>
       </div>
      <div className="question-answer">
        <Link>This is questions title
        This is questions title
        This is questions title
        </Link>
        <div style={{
          width: "90%"
        }}>
        <div>
          This is answer
          This is answer
          This is answer
          This is answer
          </div>
        </div>
        <div style={{
          display: "flex"
        }}>
          <span className='question-tags'>
            react
          </span>
          <span className='question-tags'>
            antd
          </span>
          <span className='question-tags'>
            frontend
          </span>
        </div>
        <div className="author">
        <small>Timestamp</small>
        <div className="author-details">
          <Avatar/>
          <p>username</p>
        </div>
        </div>

      </div>

     </div>
   </div>
  )
}

export default AllQuestions