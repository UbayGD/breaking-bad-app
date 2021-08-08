import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './appbar.styles';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import Flag from 'react-world-flags';

const AppBarComponent = () => {
    const { t, i18n } = useTranslation()
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
                            placeholder={t('search')}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>}
                    {renderLanguageDropdown()}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComponent;