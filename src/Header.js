import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

function Header() {
    return (
        <div className='header'>

            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>

            <img 
                className="header_logo"
                src="https://image.flaticon.com/icons/png/512/732/732251.png"
                alt=""
            />

            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header_icon"/>
            </IconButton>


        </div>
    )
}

export default Header
