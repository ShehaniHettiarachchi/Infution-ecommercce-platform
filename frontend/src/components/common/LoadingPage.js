import React from 'react';
import { Link } from "react-router-dom";
import Slider1 from '../../components/images/img1.jpg';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const customTheme = extendTheme({
    typography: {
      display1: {
        // `--joy` is the default CSS variable prefix.
        // If you have a custom prefix, you have to use it instead.
        // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
        background:
          'linear-gradient(-30deg, var(--joy-palette-primary-900), var(--joy-palette-success-200))',
        // `Webkit*` properties must come later.
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: 48,
        letterSpacing: '.3rem',
      },
    },
  });



export default function LoadingPage() {

    
    return (
    <div style={{backgroundColor: "#"}}>
        <CssVarsProvider theme={customTheme}>
            <Box sx={(theme) => theme.typography.display1}> <center> Explore Your True Beauty ...</center></Box>
        </CssVarsProvider>
        <Button variant="soft" endDecorator={<KeyboardArrowRight />} color="success" > <Link to= "/home">
        Get Started </Link>
      </Button>
        <img src={Slider1} style={{width: "100%"}} />
            
        
    </div>

    );

}
