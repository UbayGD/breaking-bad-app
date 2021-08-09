import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    select: {
        marginLeft: "1em"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));