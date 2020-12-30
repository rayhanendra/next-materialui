import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MyLayout from '../components/layouts/MyLayout'

import Deposits from '../components/Dashboard/Deposits.js';
import DaftarAdminList from '../components/Dashboard/DaftarAdminList';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#303030'
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function LaporanPembukuan() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Dashboard*/}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <Typography variant='h5'>
                  Laporan Pembukuan
                </Typography>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Daftar Admin */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <DaftarAdminList />
              </Paper>
            </Grid>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>

        </Container>
      </main>
    </>
  );
}

LaporanPembukuan.Layout = MyLayout;