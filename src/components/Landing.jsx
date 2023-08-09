import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import root from '../assets/root.svg';

const Landing = () => {

  const boxStyle = {
    position: 'relative',
    minHeight: '700px',
    display: 'flex',
    background:'#4A3228'
  };

  const sideImageStyle = {
    position: 'absolute',
    top: '50%', // Alinea verticalmente al centro
    left: '-100px', // Empieza fuera del área visible a la izquierda
    transform: 'translateY(-50%)',
    width: '20%', // Ajusta el tamaño de la imagen
    transition: 'left 2s ease-in-out', // Animación de desplazamiento
  };

  useEffect(() => {
    // Cuando el componente se monta, inicia la animación
    const image = document.getElementById('side-image');
    if (image) {
      image.style.left = '40%'; // Mueve la imagen hacia la derecha
    }
  }, []);

  return (
    <>
      <Box id='landing' sx={ boxStyle }>
      <img
        id="side-image"
        src={root}
        alt="Side Image"
        style={sideImageStyle}
        />
      </Box>
    </>
  );
};

export default Landing;