import React from 'react'
import { connect } from 'react-redux'
import { authUserUnSet } from '../actions/users'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBarMenu(){
  return (
    <div>
      <NavLink exact to={'/'} activeClassName="activelink">
        <IconButton className="navicon" title="Home" >
          <HomeIcon fontSize="large" />
        </IconButton>
      </NavLink>
      <NavLink to={'/add'} activeClassName="activelink">
        <IconButton className="navicon" title="New Question">
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </NavLink>
      <NavLink to={'/leaderboard'} activeClassName="activelink">
        <IconButton className="navicon" title="Leaderboard">
            <AssignmentIndIcon fontSize="large">
            </AssignmentIndIcon>
        </IconButton>
      </NavLink>
    </div>
  )
}

function NavBar (props){
    const classes = useStyles()
    const user = props.user
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = () => {
      handleClose()
      props.dispatch(authUserUnSet())
    }

    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {
              user ?
              <NavBarMenu />
              :<span>Would you rather</span>
            }
          </Typography>
          { user &&
            (
              <div>
                <span> Welcome, { user.name } </span>
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
    )
}

function mapStateToProps({authUser, users}){
  return {
    user: authUser ? users[authUser] : null
  }
}

export default connect(mapStateToProps)(NavBar)
