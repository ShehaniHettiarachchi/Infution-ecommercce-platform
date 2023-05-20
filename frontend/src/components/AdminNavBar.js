import React from "react";
import "./HomeNavBar.css";
import "./Header/Header.css";
import { Link } from "react-router-dom";


// Material UI
import SpaIcon from '@mui/icons-material/Spa';
import Typography from '@mui/material/Typography';

function AdminNavBar() {
  return (
    <nav className="nav-bar position-relative" style={{backgroundColor: '#0A4D68', width: "100%"}}>
      
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 1000,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >        <SpaIcon sx={{ display: { xl: 'none', md: 'flex' }, mr: 2 }} />
          INFUTION
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >  
          <Link to="/admin-home">Dashboard</Link>
          </Typography>
  
      
    </nav>
  );
}

export default AdminNavBar;
