import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './appbar.styles';
import { useLocation } from 'react-router-dom';

const AppBarComponent = () => {
    const location = useLocation();
    const classes = useStyles();

    const isHome = (): boolean => location.pathname === '/'

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Breaking Bad App
                    </Typography>
                    {isHome() && <div className={classes.search}>
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
                    </div>}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComponent;