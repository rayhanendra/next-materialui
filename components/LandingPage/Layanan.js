import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridRoot:{
        flexGrow: 1,
        textAlign: 'center',
    },
    grid:{
        backgroundColor: "",
        padding: theme.spacing(4),
    }
}));

export default function Layanan() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.gridRoot}>
                <Grid item xs={12} md={4} className={classes.grid}>
                    mahasiswa ppku
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid}>
                    tutor ahli
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid}>
                    fleksibel
                </Grid>
            </Grid>
        </div>
    )
}

