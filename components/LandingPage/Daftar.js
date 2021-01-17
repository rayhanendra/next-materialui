import React from 'react';
import { Button, Grid } from '@material-ui/core';
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
        maxWidth:'400px',
    },
}));

export default function Daftar(){
    
    const classes = useStyles();

    return(
        <div>
            <Grid container className={classes.gridRoot}> 
                <Grid item xs={12} md={6} className={classes.grid} >
                    <img className={classes.img} src={daftar}/>
                </Grid>
                <Grid item xs={12} md={6} className={classes.grid} >
                    <h2>
                        Daftar Tutor
                    </h2>
                    <p>Yuk daftarkan dirimu menjadi bagian dari Tutor Ahli Sahabat Tutor kami</p>
                    <Link href="#" passHref>
                        <Button variant="contained">
                            Gabung Sekarang
                        </Button>
                    </Link>

                </Grid>
            </Grid>
        </div>
    );
}