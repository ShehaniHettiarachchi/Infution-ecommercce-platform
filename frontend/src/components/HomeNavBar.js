import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../slices/authSlice";
import { toast } from "react-toastify";

// Material UI
import SpaIcon from '@mui/icons-material/Spa';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  return (
    <nav className="nav-bar position-relative" style={{backgroundColor: '#0A4D68', width: "100%"}}>

      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
          <Link to="/home">
            INFUTION
            </Link>
          </Typography>
      <Link to="/cart">
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#ECF2FF"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
      {auth._id ? (
        <Logout
          onClick={() => {
            dispatch(logoutUser(null));
            toast.warning("Logged out!", { position: "bottom-left" });
          }}
        >
          Logout
        </Logout>
      ) : (
        <AuthLinks>
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
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/admin-home">About Us</Link>
          </Typography>
        </AuthLinks>
      )}
    </nav>
  );
};

export default NavBar;

const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Logout = styled.div`
  color: white;
  cursor: pointer;
`;