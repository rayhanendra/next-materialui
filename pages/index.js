import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dashboard from './Dashboard'
import Link from 'next/link';

export default function Index() {
  return (
    <Container>
      Ini index
      <Link href="/Dashboard" passHref>
        ke dashboard
      </Link>
    </Container>
  );
}