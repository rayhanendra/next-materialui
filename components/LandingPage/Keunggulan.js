import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

import fitur from '../../static/fitur-matakuliah.svg';
import gplay from '../../static/gplay.png';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
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
    gplay:{
        maxWidth:'200px',
    },
    title:{
        color: '#0064D2'
    },
    adjust:{
        marginTop: '35%',
        [theme.breakpoints.down('sm')]:{
            marginTop: '0%',
        },
    },

}));

export default function Keunggulan(){
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.gridRoot}> 
                <Grid item xs={12} sm={6} className={classes.grid} >
                    <img className={classes.img} src={fitur}/>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid} >
                   <div  className={classes.adjust}>
                        <Typography variant="h5" className={classes.title}>Pemanggilan Tutor Untuk Semua Matakuliah</Typography> 
                        <br/>
                        <Typography variant="subtitle1" >Belajar kapanpun dan dimanapun dengan proses pemesanan tutor ahli yang mudah dan menenyangkan</Typography> 
                        <br/>
                        <Link href="https://play.google.com/store/apps/details?id=id.codepanda.sahabattutor.pelajar" passHref>
                            <Button>
                                <img className={classes.gplay} src={gplay}/>
                            </Button>
                        </Link>

                   </div>
                    
                </Grid>
            </Grid>
        </div>
    );
}