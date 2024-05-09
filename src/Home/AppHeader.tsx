import * as React from 'react';
import { Box, Button, Container, IconButton, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';


export default function AppHeader() {
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                border: '1px solid',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
            }}
        >
            <p>header</p>
        </Box>
        
    );
}