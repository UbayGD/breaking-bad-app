import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './appbar.styles';
import { FormControl, Select, MenuItem, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Flag from 'react-world-flags';

const AppBarComponent = () => {
    const { i18n } = useTranslation();
    let history = useHistory();
    const location = useLocation();
    const classes = useStyles();

    const isHome = (): boolean => location.pathname === '/';

    const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
        i18n.changeLanguage(event.target.value as string);
    };

    const renderLanguageDropdown = () => {
        return (
            <FormControl className={classes.formControl}>
                <Select
                    data-testid="language-select"
                    value={i18n.language}
                    onChange={handleChangeLanguage}
                    className={classes.select}>
                    <MenuItem value={'en'}>
                        <Flag code="GBR" height="auto" width="20"></Flag>
                    </MenuItem>
                    <MenuItem value={'es'}>
                        <Flag code="ESP" height="auto" width="20"></Flag>
                    </MenuItem>
                </Select>
            </FormControl>
        );
    }

    const handleBackButton = () => {
        history.push('/')
    }

    const renderBackButton = () => {
        return (
            <IconButton aria-label="back" onClick={handleBackButton}>
                <ArrowBackIcon />
            </IconButton>
        )
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {!isHome() && renderBackButton()}
                    <Typography className={classes.title} variant="h6" noWrap>
                        Breaking Bad App
                    </Typography>
                    {renderLanguageDropdown()}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComponent;