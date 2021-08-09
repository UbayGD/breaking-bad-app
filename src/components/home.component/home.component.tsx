import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { CharacterModel } from '../../models/character.model';
import CharacterCard from '../character.card.component/character.card.component';
import { useStyles } from './home.component.styles';
import { getCharactersAction } from '../../actions/characters.actions';
import { useTranslation } from 'react-i18next';
import { debounce } from '@material-ui/core';

const HomeComponent = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const dispatch = useDispatch()

    const characters: CharacterModel[] = useSelector<{characters: CharacterModel[]}, CharacterModel[]>(state => state?.characters);
    const [filteredCharacters, setFilteredCharacters] = useState<CharacterModel[]>();

    useEffect(() => {
        dispatch(getCharactersAction());
    // eslint-disable-next-line
    }, [])

    const handleSearchInput = debounce((ev: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = ev.target.value;
        setFilteredCharacters(characters?.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase())))
    })

    return (
        <div className={classes.root}>
            <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={t('search')}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={handleSearchInput}
                        />
                    </div>
            <Grid container spacing={3} alignItems="stretch">
                {(filteredCharacters || characters)?.map((character: CharacterModel, index: number) => {
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