import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { Button, Grid, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';

import mainLogo from '../../static/sahabat-favicon.png';


const useStyles = makeStyles((theme) => ({
    root:{
        color: 'black'
    },
    gridRoot:{
        flexGrow: 1,
        textAlign: 'center',
    },
    grid:{
        backgroundColor: "",
        padding: theme.spacing(4),
    },
    img:{
        maxWidth:'400px',
    },
    icon:{
        margin: theme.spacing(2),
        backgroundColor:'blue'
    },
    button:{
        color:'black'
    }
}));

export default function Footer(){
    const classes = useStyles();

    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );

    return () => {
        node.parentNode.removeChild(node);
        };
    }, []);

    return(
        <div className={classes.root}>
            <Grid container className={classes.gridRoot}> 
                <Grid item xs={12} md={3} className={classes.grid} >
                    <img className={classes.img} src={mainLogo}/>
                    <p>Nilai “A” itu mudah!</p>
                </Grid>
                <Grid item xs={12} md={3} className={classes.grid} >
                    <Grid item xs={12}>
                        <Link href='#' passHref>
                            <Button className={classes.button}>
                                Layanan
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href='#' passHref>
                            <Button className={classes.button}>
                                Fitur
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href='#' passHref>
                            <Button className={classes.button}>
                                Tutor
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} className={classes.grid} >
                    <Typography variant="h5">
                        Kontak
                    </Typography>
                    <Typography variant="p">
                    CP Sahabat Tutor : <br/>
                    089614102505 <br/>
                    CP Sahabat Tutor : <br/>
                    081365513125
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} className={classes.grid} >
                    <Link href="#" passHref>
                        <Button>
                            <Icon className="fab fa-line" color="primary" style={{ fontSize: 45 }}/>
                        </Button>
                    </Link>
                    <Link href="#" passHref>
                        <Button>
                            <Icon className="fab fa-instagram" color="primary" style={{ fontSize: 45 }}/>
                        </Button>
                    </Link>
                    <Link href="#" passHref>
                        <Button>
                            <Icon className="fab fa-whatsapp" color="primary" style={{ fontSize: 45 }}/>
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} className={classes.grid} >
                    <p>
                        © 2019 Copyright: Sahabat Tutor 2019 Developed by <a href="https://codepanda.id/">codepanda.id</a>
                    </p>   
                </Grid>
            </Grid>
        </div>
    );
}