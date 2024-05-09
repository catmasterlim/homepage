import * as React from 'react';
import { Box, Button, Container, IconButton, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';


export default function AppHeader() {
    return (
        <>
        <Box sx={{ border: 1, borderColor: 'divider', }}>
        <Grid
            container
            spacing={2}
        >
            <Grid>
                <Tooltip title="Home">
                    <Button href='/' color="secondary" startIcon={<HomeIcon />}>
                        Home
                    </Button>
                </Tooltip>
                <Tooltip title="Kakao Channel Link">
                    <Button color="secondary" href='http://pf.kakao.com/_viakG' target="_blank" startIcon={<LinkIcon />}>
                        Kakao Channel
                    </Button>
                </Tooltip>
                </Grid>
        </Grid>
        </Box>
        
        </>
    );
}