import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/Cart.png";
import search from "../assets/img/search.png";
import account from "../assets/img/Account.png";
import Badge from "@material-ui/core/Badge";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarsIcon from '@material-ui/icons/Stars';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/More';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles ((theme) =>({
    list: {
      width: 250,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
}));
function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton aria-label="show 4 items" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <p>Cart</p>
          </MenuItem>
          {/* <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem> */}
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Sign In</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Sign Up</p>
          </MenuItem>
        </Menu>
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon>
                        <StarsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Trang chủ" />
                    </ListItem>
                </Link>

                <Link to="/sales">
                    <ListItem button>
                        <ListItemIcon>
                        <StarsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sale" />
                    </ListItem>
                </Link>

                <Link to="/aboutus">
                    <ListItem button>
                        <ListItemIcon>
                        <StarsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Về chúng tôi" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                    <DynamicFeedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Đồ ăn" />
                </ListItem>
                {['Mứt', 'Trái cây sấy', 'Khô'].map((text) => (
                <ListItem button key={text}>
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>

            <List>
                <ListItem button>
                    <ListItemIcon>
                    <DynamicFeedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Đồ uống" />
                </ListItem>
                {['Trà sữa', 'Trà', 'Nước tăng lực'].map((text) => (
                <ListItem button key={text}>
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div className="header">
            <nav className="header__nav">
                <ul className="header__left">
                    <Link to="/" className='link'>
                        <img src={logo} alt="" className="header__logo" />
                    </Link>

                    <li>
                        <Link to="/" className='link'>Trang chủ</Link>
                    </li>

                    <li className="header__dropdown">
                        <Link to="/products" className='link' >Sản phẩm</Link>
                        <div className="dropdowncontent">
                            <div className="header__submenu">
                                <div className="header__column">
                                    <Link to="/" className='link' className='header__subtitle'>ĐỒ ĂN</Link>
                                    <img src='https://image.freepik.com/free-photo/eastern-sweets-turkish-delight-lokum-with-nuts-top-view_114579-8401.jpg' alt="" className="header__columnImage" />
                                </div>

                                <div className="header__column">
                                    <div className='header__subcolumn'>
                                        <Link to="/" className='link'><i class="fas fa-atom"></i>Mứt</Link>
                                        <Link to="/" className='link'>Trái cây sấy</Link>
                                        <Link to="/" className='link'>Khô</Link>
                                        <Link to="/" className='link'>Kẹo</Link>
                                        <Link to="/" className='link'>Snack</Link>
                                        <Link to="/" className='link'>Bánh ngọt</Link>
                                        <Link to="/" className='link'>Ngũ cốc</Link>
                                        <Link to="/" className='link'>Hạt khô</Link>
                                    </div>
                                </div>

                                <div className="header__column">
                                    <Link className="link" className='header__subtitle' to="/">ĐỒ UỐNG</Link>
                                    <img src="https://image.freepik.com/free-psd/mockup-liquid-bottle-labels_53876-65817.jpg" alt="" className="header__columnImage" />
                                </div>

                                <div className="header__column">
                                    <div className='header__subcolumn'>
                                        <Link className="link" to="/">Nước khoáng</Link>
                                        <Link className="link" to="/">Sữa</Link>
                                        <Link className="link" to="/">Tăng lực</Link>
                                        <Link className="link" to="/">Dưỡng chất</Link>
                                        <Link className="link" to="/">Nước ngọt</Link>
                                        <Link className="link" to="/">Trà</Link>
                                        <Link className="link" to="/">Trà sữa</Link>
                                        <Link className="link" to="/">Nước có ga </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link className="link" to="/sales">Khuyến mãi</Link>
                    </li>

                    <li>
                        <Link className="link" to="/aboutus">Về chúng tôi</Link>
                    </li>
                </ul>

                <ul className="header__right">
                    <li className="header__search">
                        <input type="text"/>
                        <button className="buttonstyle"><img src={search} className='search' alt=""/></button>
                    </li>

                    <li>
                        <Badge badgeContent={4} color="secondary">
                            <Link className="link" to='/cart'>
                                <img src={cart} className='header__icon' alt=""/>
                            </Link>
                        </Badge>
                    </li>

                    <li className="header__account">
                        <Link className="link" to='/account'>
                            <img src={account} alt="" className='header__icon' />
                        </Link>
                        <div className="header__signpane">
                            <div className="header__log">
                                <Link className="link" to='/register'><button className='btn-hover color-4'>Đăng ký</button></Link>
                                <Link className="link" to='/login'><button className='btn-hover color-4'>Đăng nhập</button></Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="menumobile"> 
                <div className={classes.grow}>
                <AppBar position="sticky" color="secondary" position="fixed">
                    <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={toggleDrawer("left", true)}
                    >
                        <MenuIcon />
                    </IconButton>
                            <Drawer anchor="left" open={state.left} onClose={toggleDrawer("left", false)}>
                                {list("left")}
                            </Drawer>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Putolata
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                        <MoreIcon />
                        </IconButton>
                    </div>
                    </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                </div>
            </div>
        </div>
    );
}

export default Header;
