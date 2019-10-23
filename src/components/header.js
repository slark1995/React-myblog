import React from 'react';
import sidePortrait from '../assets/pics/sidePortrait.jpg';
import './header.css'
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { cyan } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
                <PersistentDrawerLeft open = {this.props.open}/>
        );
    };
};


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor:cyan[700],
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  title: {
    flexGrow: 1,
    display: "flex",
    margin: 5,
  },


  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(props.open);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <i className="fa fa-paper-plane fa-lg" aria-hidden="true"></i>
          <Link to='/' className = "title">
          <Typography variant="h6" noWrap className={classes.title}>
            Taijie's Personal Page
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>}

      {/* ========================DRAWER=========================== */}

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
            
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <div className="info">
                    <img src={sidePortrait} className="sidePortrait" alt="portrait" />
                    <h2>TJ.Yang</h2>
                    <p>Web Dev/shutterbug</p>
                    <a href = "https://github.com/slark1995" target="_blank"><p><i className="fa fa-github" aria-hidden="true"> Github</i></p></a>
                </div>
        <Divider />


        <List>
          <Link to='/' className = "sideTitle">
          <ListItem button key = "Home page">
          <ListItemIcon><i className="fa fa-home fa-lg" aria-hidden="true"></i></ListItemIcon>
          <ListItemText primary="Home page" />
          </ListItem>
          </Link>
        </List>
          <Divider />
          
        <List>
          <ListItem button key = "All posts">
          <ListItemIcon><i className="fa fa-file-code-o fa-lg" aria-hidden="true"></i></ListItemIcon>
          <ListItemText primary="All posts" />
          </ListItem>

          <ListItem button key = "Web dev">
          <ListItemIcon><i className="fa fa-code fa-lg" aria-hidden="true"></i></ListItemIcon>
          <ListItemText primary="Web dev" />
          </ListItem>

          <ListItem button key = "Algorighm">
          <ListItemIcon><i className="fa fa-hashtag fa-lg" aria-hidden="true"></i></ListItemIcon>
          <ListItemText primary="Algorighm" />
          </ListItem>

          <ListItem button key = "AI related">
          <ListItemIcon><i className="fa fa-lightbulb-o fa-lg" aria-hidden="true"></i></ListItemIcon>
          <ListItemText primary="AI related" />
          </ListItem>

        </List>
        <Divider />
        <List>
          <ListItem button key = "Photos">
          <ListItemIcon><i className="fa fa-camera-retro fa-lg"></i></ListItemIcon>
          <ListItemText primary="Photos" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key = "Demos">
          <ListItemIcon><i className="fa fa-cubes fa-lg" aria-hidden="true"></i></ListItemIcon>
          <ListItemText primary="Demos" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
      </main>
    </div>
  );
}



export default Header;