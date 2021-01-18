import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import daftar from '../../static/daftar-tutor.svg';
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
        maxWidth:'500px',
    },
    adjust:{
        marginTop: '20%',
        [theme.breakpoints.down('sm')]:{
            marginTop: '0px',
        },
    },
    title:{
        color: '#0064D2'
    },
    button:{
        backgroundColor: '#0064D2',
        color: 'white',
        '&:hover':{
            variant: 'outlined'
        }
    },
    
}));

export default function Daftar(){
    
    const classes = useStyles();

    return(
        <div>
            <Grid container className={classes.gridRoot}> 
                <Grid item xs={12} sm={6} className={classes.grid} >
                    <img className={classes.img} src={daftar}/>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid} >
                    <div className={classes.adjust}></div>
                    <Typography variant="h5" className={classes.title}>
                        Daftar Tutor
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1">Yuk daftarkan dirimu menjadi bagian dari Tutor Ahli Sahabat Tutor kami</Typography>
                    <br/>
                    <Link href="#" passHref>
                        <Button variant="contained" className={classes.button}>
                            Gabung Sekarang
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}