import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { CharacterModel } from '../../models/character.model';
import { getCharacterAction } from '../../actions/characters.actions';
import { useStyles } from './character.view.styles';
import { getQuote } from '../../services/api.service';
import { useState } from 'react';

const CharacterView = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>();
    const character = useSelector<{ characters: CharacterModel[] }, CharacterModel | undefined>(state => {
        return state.characters?.find((character => character.char_id === Number(id)))
    });
    const [quote, setQuote] = useState<string>();

    useEffect(() => {
        if (!character) {
            dispatch(getCharacterAction(id));
        } else {
            (async () => {
                getCharacterQuote()
            })()
        }
    }, [character])

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            getCharacterQuote()
        }, 7000);
        return () => clearInterval(quoteInterval);
    }, []);

    const getCharacterQuote = async () => {
        if (character) {
            const q = await getQuote(character.name);
            setQuote(q);
        } 
    }

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
                    <ListItemText primary="Name" 
                        secondary={character?.name || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Nickname" 
                        secondary={character?.nickname || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Birthday" 
                        secondary={character?.birthday || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Status" 
                        secondary={character?.status || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Occupation" 
                        secondary={character?.occupation || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Portrayed" 
                        secondary={character?.portrayed || <Skeleton variant="text" />} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Appearance" 
                        secondary={character?.appearance || <Skeleton variant="text" />} 
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