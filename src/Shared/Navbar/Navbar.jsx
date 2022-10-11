import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import SearchBar from "./SearchBar";
import AppDrawer from "../../Pages/Home/AppDrawer/AppDrawer";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
const pages = [
  {
    _id: 1,
    name: "Product",
    route: "/product",
  },
  {
    _id: 2,
    name: "Pricing",
    route: "/pricing",
  },
  {
    _id: 3,
    name: "Login",
    route: "/login",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            {" "}
            <img className="hidden lg:block lg:h-10 mx-2 " src={logo} alt="" />
          </Link>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEHRAF
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page._id} onClick={handleCloseNavMenu}>
                  <Link to={page.route}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AppDrawer />
          {/* <Link to="/">
            {" "}
            <img className=" lg:hidden  h-6 mx-2" src={logo} alt="" />
          </Link> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                className="px-4"
                key={page._id}
                to={page.route}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <SearchBar />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Logout">
              <IconButton onClick={logout} sx={{ p: 1 }}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
