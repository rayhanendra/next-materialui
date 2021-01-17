import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Headline from '../Headline';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import ppku from '../../../static/ppku.png';
import tutor from '../../../static/tutor.png';
import fleksibel from '../../../static/fleksibel.png';
import Keunggulan from '../Keunggulan';
import Daftar from '../Daftar';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
    root:{
      minHeight: '100vh',
      color: 'black',
      backgroundColor: 'white',

    },
    gridRoot:{
        flexGrow: 1,
        textAlign: 'center',
       
    },
    grid:{
        backgroundColor: "",
        padding: theme.spacing(4),
    },
    imgLayanan:{
        maxWidth:'150px',
        marginBottom: '20px'
    },
    titleLayanan:{
        color: '#0064D2'
    }

}));

export default function Layout(props) {

    var layanans = [
        {
            img: ppku,
            title: "Mahasiswa PPKU",
            desc: "Mewadahi pengajaran yang diperuntukan untuk mahasiswa PPKU Institut Pertanian Bogor",
        },
        {
            img: tutor,
            title: "Tutor Ahli",
            desc: "Berbagai tutor ahli yang dipersiapkan untuk mengajari kamu setiap saat",
        },
        {
            img: fleksibel,
            title: "Fleksibel",
            desc: "Bebas memilih jadwal dan lokasi belajar yang diinginkan oleh kalian",
        },
    ]

    

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Container maxWidth="lg">

                <Grid container className={classes.gridRoot}> 
                    <Grid item xs={12} >
                        <Headline/>
                    </Grid>

                    <Grid item xs={12} className={classes.grid} >
                        <Typography variant="h4">
                            Layanan
                        </Typography>
                    
                        <Grid container className={classes.gridRoot}>
                            {
                                layanans.map( (item, i) => 
                                    <Layanan key={i} item={item}/>
                                )
                            }
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={12} className={classes.grid}>
                        
                        <Typography variant="h4">
                            Keunggulan Kami
                        </Typography>
                        <Keunggulan/>
                    </Grid>

                    <Grid item xs={12} className={classes.grid}>
                        <Typography variant="h4">
                            Daftar Tutor
                        </Typography>
                        <Daftar/>
                    </Grid>

                    <Grid item xs={12} className={classes.grid}>
                        <Footer/>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

function Layanan(props){
    const classes = useStyles();
    return(
        <Grid item xs={12} md={4} className={classes.grid}>
            <img className={classes.imgLayanan} src={props.item.img}/>
            
            <Typography variant="h5" className={classes.titleLayanan}>{props.item.title}</Typography>
            <Typography variant="subtitle1">{props.item.desc}</Typography>
        </Grid>
    );
}