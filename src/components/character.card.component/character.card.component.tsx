import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './character.card.styles';
import { CharacterCardProps } from './character.card.types';

const CharacterCard = (props: CharacterCardProps) => {
    const { character } = props;
    const { char_id, name, nickname, img } = character;
    const classes = useStyles();

    return (
        <Link to={location => `/character/${char_id}`}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={img}
                        alt={name}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {nickname}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
        
    );
}

export default CharacterCard;