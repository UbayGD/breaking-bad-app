import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { CharacterModel } from '../../models/character.model';
import { getCharacterAction } from '../../actions/characters.actions';
import { useStyles } from './character.view.styles';
import { useTranslation } from 'react-i18next';
import { clearQuoteAction, getQuoteAction } from '../../actions/quote.actions';

const CharacterView = () => {
    const [t] = useTranslation();
    const classes = useStyles();
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>();
    const character = useSelector<{ characters: CharacterModel[] }, CharacterModel | undefined>(state => {
        return state.characters?.find((character => character.char_id === Number(id)))
    });
    const quote = useSelector<{ quote: string}, string>(state => state.quote);

    useEffect(() => {
        if (!character) {
            dispatch(getCharacterAction(id));
        } else {
            dispatch(getQuoteAction(character.name));
        }
    // eslint-disable-next-line
    }, [character])

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            character && dispatch(getQuoteAction(character?.name));
        }, 7000);
        return () => {
            dispatch(clearQuoteAction());
            clearInterval(quoteInterval)
        };
    // eslint-disable-next-line
    }, []);

    const renderImg = (): JSX.Element => {
        return (
            <>
            {character?.img ?
                <figure id={`${id}`}>
                    <picture>
                        <img src={character?.img} alt={character?.name} loading="lazy" className={classes.characterImg}/>
                    </picture>
                </figure>
                : <Skeleton variant="rect" />}
            </>
        );
    }

    const renderInfo = (): JSX.Element => {
        return (
            <List className={classes.list}>
                <ListItem>
                    <ListItemText primary={t('character.name')} 
                        secondary={character?.name || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('character.nickname')} 
                        secondary={character?.nickname || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('character.birthday')} 
                        secondary={character?.birthday || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('character.status')} 
                        secondary={character?.status || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('character.occupation')} 
                        secondary={character?.occupations || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('character.portrayed')} 
                        secondary={character?.portrayed || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('character.appearance')} 
                        secondary={character?.appearances || <Skeleton variant="text" />} 
                    />
                </ListItem>
            </List>
        );
    }

    const renderQuote = () => {
        return (
            <Paper elevation={4}>
                {quote ?
                    <blockquote className={classes.quote}>
                        {quote}
                    </blockquote>
                : <Skeleton variant="text" />}
            </Paper>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        {renderImg()}
                        {renderQuote()}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        {renderInfo()}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default CharacterView;