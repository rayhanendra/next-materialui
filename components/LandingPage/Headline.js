import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';
import hero1 from '../../static/hero-1.png';
import hero2 from '../../static/hero-2.png';
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
    },

    headline: {
        width:'900px',
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
            navButtonsAlwaysVisible="true"
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
        <div>
             <img className={classes.headline} src={props.item.img}/>
        </div>
    );
}