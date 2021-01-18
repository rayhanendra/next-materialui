import React from 'react';
import Carousel from 'react-material-ui-carousel';
import hero1 from '../../static/hero-1.png';
import hero2 from '../../static/hero-2.png';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        backgroundColor: ''
    },

    headline: {
        maxWidth:'64vw',
        [theme.breakpoints.down('sm')]:{
            maxWidth:'90vw',
        },
    },
}))

export default function Headline(props) {
    const classes = useStyles();
    var items = [
        {
            img: hero1,
        },
        {
            img: hero2,
        },

    ]

    return (
        <Carousel
            className={classes.root}
            indicatorProps={{style: {color: '#80B2E9'}}}
            activeIndicatorProps={{style: {color: '#0064D2'}}}
            animation="slide"
        >
            {
                items.map( (item, i) => 
                    <Item key={i} item={item}/>
                )
            }
        </Carousel>
    );
}

function Item(props){
    const classes = useStyles();
    return(
       
        <div >
             <img className={classes.headline} src={props.item.img}/>
        </div>
    );
}