import React from 'react';
import { Box, Paper, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Paper>
                <Box p = {2}>
                    <Box className='titulo' display = "flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/g_moana_09_17699_064f5500_2f9ff275.jpeg?region=208,0,731,730" alt="" style = {{width: "100%", height: "100%"}}/>
                    <Box className='texto' display = "flex" justifyContent="center" p = {2}>
                        <Button variant = "contained" color = "primary">Butão 1</Button>
                        <Button variant = "contained" color = "secondary">Butão 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

export default Home