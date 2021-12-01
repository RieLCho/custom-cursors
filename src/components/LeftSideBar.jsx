import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@mui/material';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        backgroundColor: 'white',
    },
    container: {
        position: 'absolute',
    },
    logo: {
        position: 'relative',
    }
})

export default function LeftSideBar(){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Button className={classes.logo}>
                    
                </Button>
            </div>
        </div>
    )
}