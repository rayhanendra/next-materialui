import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import mainLogo from '../../static/sahabat-favicon.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        height:'50px',
        widht: '100%',
    },
    title: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: 'white',
    },
    textColor: {
        color: 'black',
    },

}));

export default function Header(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.header}position="static">
                <Toolbar>
                        <img className={classes.logo} src={mainLogo} alt='mainLogo' id='mainLogo'/>
                        <Link href="#" passHref>
                            <Button className={classes.textColor} variant="h6" color="black">
                                Layanan
                            </Button>
                        </Link>
                        <Link href="#" passHref>
                            <Button className={classes.textColor} variant="h6" color="black">
                                Fitur
                            </Button>
                        </Link>
                        <Link href="#" passHref>
                            <Button className={classes.textColor} variant="h6" color="black">
                                Tutor
                            </Button>
                        </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
