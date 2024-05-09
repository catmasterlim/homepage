import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AppLeft from './AppLeft';
import AppMain from './AppMain';
import AppRight from './AppRight';



export default function App() {
  return (

    <Box
      sx={{
        p: 1,
        m: 1,
        border: '1px solid',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        display: 'flex'
      }}
    >
      <AppLeft />
      <AppMain />
      <AppRight />
    </Box>

  );
}
