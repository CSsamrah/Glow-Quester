import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Tabs,
    Tab,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    AccountCircle,
    MoreVert as MoreIcon,
    ShoppingCart as ShoppingCartIcon,
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function LinkTab(props) {
    return (
        <Tab
            component={Link}
            to={props.to}
            {...props}
        />
    );
}

LinkTab.propTypes = {
    to: PropTypes.string.isRequired,
};

function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab label="Home" to="/" sx={{ fontWeight: '800', fontFamily: 'Inter' }} />
                <LinkTab label="Quiz" to="/skintest" sx={{ fontWeight: '800', fontFamily: 'Inter' }} />
                <LinkTab label="Skincare" to="/catalog" sx={{ fontWeight: '800', fontFamily: 'Inter' }} />
            </Tabs>
        </Box>
    );
}

const theme = createTheme({
    typography: {
        fontFamily: 'serif',
    },
    palette: {
        primary: {
            main: '#ffffff',
            light: '#e0868f',
            dark: 'ce5f6a',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ed2d93',
            light: '#f2e0cb',
            dark: '#f4dbbc',
            contrastText: '#4f220f',
        },
    },
});

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [skincareOpen, setSkincareOpen] = React.useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleSkincareClick = () => {
        setSkincareOpen(!skincareOpen);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose} component={Link} to="/sign-up">Sign Up</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/sign-in">Log In</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Shopping Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const drawer = (
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{ '& .MuiDrawer-paper': { width: 300 } }}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/skintest">
                    <ListItemText primary="Skintest" />
                </ListItem>
                <ListItem button onClick={handleSkincareClick}>
                    <ListItemText primary="Skincare" />
                    {skincareOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={skincareOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/skincare/cleansers" sx={{ pl: 4 }}>
                            <ListItemText primary="Cleansers" />
                        </ListItem>
                        <ListItem button component={Link} to="/skincare/moisturizers" sx={{ pl: 4 }}>
                            <ListItemText primary="Moisturizers" />
                        </ListItem>
                        <ListItem button component={Link} to="/skincare/serums" sx={{ pl: 4 }}>
                            <ListItemText primary="Serums" />
                        </ListItem>
                        <ListItem button component={Link} to="/skincare/sunscreen" sx={{ pl: 4 }}>
                            <ListItemText primary="Sunscreen" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='absolute' color='transparent' elevation={0}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }}>
                            <NavTabs />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                variant="h4"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: '600', color: 'white' }}
                            >
                                Glow Quester
                            </Typography>
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton aria-label="cart">
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                {drawer}
            </Box>
        </ThemeProvider>
    );
}



