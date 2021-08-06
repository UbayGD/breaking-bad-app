import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { CharacterModel } from '../../models/character.model';
import CharacterCard from '../character.card.component/character.card.component';
import { useStyles } from './home.component.styles';
import { getCharactersAction } from '../../actions/characters.actions';

const HomeComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const characters: CharacterModel[] = useSelector<{characters: CharacterModel[]}, CharacterModel[]>(state => state?.characters);

    useEffect(() => {
        dispatch(getCharactersAction());
    // eslint-disable-next-line
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3} alignItems="stretch">
                {characters?.map((character: CharacterModel, index: number) => {
                    return (
                        <Grid key={index} item xs={3}>
                            <CharacterCard character={character} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default HomeComponent;