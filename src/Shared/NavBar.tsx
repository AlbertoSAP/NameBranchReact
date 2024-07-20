import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AccountCircle, NotInterested } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { authContext } from "../Hooks/AuthContext";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  child: React.ReactElement; // este es el tipo que buscabamos
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const NavBar: React.FC<Props> = ({ window, child }) => {
  const { authInfo, logout } = useContext(authContext)
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItemsElements: React.ReactElement[] = [];

  if (authInfo.loginStatus) {
    navItemsElements.push(
      <>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />{" "}
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            {authInfo.fullName}
          </Typography>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem sx={{color:'red', fontWeight:'bold'}} onClick={()=> logout()}> Logout <NotInterested  sx={{ fontSize:'15px', marginLeft:1 }}/>  </MenuItem>
        </Menu>
      </>
    );
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Branch Name
      </Typography>
      <Divider />
      <List>
        {[...navItems, ...navItemsElements].map((item, index) => (
          <ListItem key={`${index}-item`} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              {typeof item === "string" ? (
                <ListItemText primary={item} />
              ) : (
                item
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Branch Name
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {[...navItems, ...navItemsElements].map((item, index) => {
              return (
                <>
                  {" "}
                  {typeof item === "string" ? (
                    <Button key={`${index}-item`} sx={{ color: "#fff" }}>
                      {item}
                    </Button>
                  ) : (
                    item
                  )}
                </>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Toolbar />
        <>{child}</>
      </Box>
    </Box>
  );
};

export default NavBar;
