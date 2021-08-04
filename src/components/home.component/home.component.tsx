import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { getAllCharacters } from '../../services/api.service';
import { CharacterModel } from '../../models/character.model';
import CharacterCard from '../character.card.component/character.card.component';
import { useStyles } from './home.component.styles';

const HomeComponent = () => {
    const classes = useStyles();

    const [characters, setCharacters] = useState<CharacterModel[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getAllCharacters();
            setCharacters(response);
        })()
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3} alignItems="stretch">
                {characters.map((character: CharacterModel, index: number) => {
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