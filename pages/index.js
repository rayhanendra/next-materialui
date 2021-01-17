import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Layout from '../components/LandingPage/Layouts/Layout';
import theme from '../src/theme';

export default function Index() {
  return (
    <ThemeProvider theme={theme} >
        <CssBaseline/>
          <Layout/>
    </ThemeProvider>
  );
}

