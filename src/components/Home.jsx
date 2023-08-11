import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import imgRoot from '../assets/fotoRoot.jpeg';


function Home() {

    const boxStyle = {
        position: 'relative',
        minHeight: '650px',
        display: 'flex',
        marginLeft: '20px', 
        marginRight: '20px',
        background:'#ffffff',
        borderRadius:'20px',
        padding:'10px',
        top:'-20px',
        transition: 'margin-left 0.6s ease, margin-right 0.6s ease, top 1s ease-in-out'
    };

    const styleImage = {
        width:'100%',
        borderRadius:'20px',
        objectFit: 'cover',
        background: `linear-gradient(to top, rgba(0, 0, 0, 60), rgba(0, 0, 0, 0)) 0 0/100% 100%, url(${imgRoot}) center center/cover`,
    }

    const conteTypo = {
        position:'absolute',
        zIndex: 1,
        display:'flex',
        flexDirection:'column',
        top:'70%'
    }

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    if(isScroll) {
        boxStyle.marginLeft = '0';
        boxStyle.marginRight = '0';
        boxStyle.top ='-80px';
    }

    useEffect(() => {
        // Espera un poco y luego inicia la animación para que se vea el efecto al cargar la página
        setTimeout(() => {
            const box = document.getElementById('box');
            if (box) {
                box.style.top = '-80px';
            }
        }, 1000);
    }, []);
    
  return (
    <Box style={boxStyle} id = 'box'>
        <div style={styleImage} />
        <Container style={conteTypo}>
            <Typography variant='h2'color='#ffffff'>
                ROOT.BL
            </Typography>
            <Typography variant='h5'color='#ffffff'>
                Bienvenidos a nuestro sitio web.
            </Typography>
            <Typography variant='h7'color='#ffffff'>
                En estos momentos estamos en mantenimiento, asi que por ahora no podemos mostrarles mucho más. Gracias!
            </Typography>               
        </Container>
    </Box>
  )
}

export default Home