import * as React from 'react';
import './LeftSideBar.css';
import SailingIcon from '@mui/icons-material/Sailing';
import IconButton from '@mui/material/IconButton';

export default function LeftSideBar(){
    return (
        <div className="sidenav">
            <div className="logo">
                <IconButton
                    color="primary"
                    aria-label="logo"
                    size="large"
                >
                    <SailingIcon 
                        fontSize='inherit'/>
                </IconButton>
            </div>
        </div>
    )
}