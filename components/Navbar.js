import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#299690',
        display: 'flex',
        justifyContent: 'center',
    },
    navTxt: {
        color: 'white',
    },
    tab: {
        '&:hover': {
            backgroundColor: 'orange', // Change this to your desired hover color
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const router = useRouter();

    const handleChange = (event, newValue) => {
        router.push(newValue);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Tabs onChange={handleChange} className={classes.tabs}>
                <Tab label="Blog" value="/" className={`${classes.navTxt} ${classes.tab}`} />
                <Tab label="About" value="/about" className={`${classes.navTxt} ${classes.tab}`} />
            </Tabs>
        </AppBar>
    );
};

export default Navbar;
