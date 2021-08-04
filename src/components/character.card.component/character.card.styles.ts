import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
    },
  }));