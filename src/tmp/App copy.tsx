import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from '../ProTip';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MainTitle() {
  return (
    <Box
        height={100}
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '0px solid grey' }}
      >
          {/* <Typography variant="h4" color="h1" align="center"> */}
         <h1> {'Welcome to World '} </h1>
          {/* </Typography> */}
      </Box>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://kndsoultion.co.kr/">
         KndSolution Inc 
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      
    <Grid container border={1} spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        >
      <Grid xs>
          <h1>test</h1>
      </Grid>
      <Grid xs={18}>
        <MainTitle />

        <Grid container spacing={3}>
       
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          
        </Typography>
        <ProTip />
      </Box>

      </Grid>
      <Grid xs>
      </Grid>
    </Grid>
    
    
        
    </Container>
  );
}
