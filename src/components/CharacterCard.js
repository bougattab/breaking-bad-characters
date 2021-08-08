import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {useDispatch } from 'react-redux';
import { getCharacter } from '../store/actionCreators';
import dayjs from 'dayjs'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: 20,
  },
  content: {
    cursor: 'pointer',
    flex: '1 0 auto',
  },
  cover: {
    cursor: 'pointer',
    width: 250,
    height:250
  }
  }

 
));

export default function CharacterCard({character:{name, img, char_id, status, portrayed, birthday}}) {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickCharacter = async () => {
    await dispatch(getCharacter(char_id))
    history.push(`/${char_id}`)
}
  return (
    <Grid className={classes.root} item xs={3} alignContent="center" onClick={handleClickCharacter}>
        <Card borderRadius={16}>
            <img className={classes.cover} alt="characterImg" src={img}/>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <Typography component="p" variant="p">
                Born: {birthday !== 'Unknown' ? dayjs(birthday).format('MMMM DD, YYYY') : birthday}
              </Typography>
              <Typography component="p" variant="p">
                Status: {status}
              </Typography>
              <Typography component="p" variant="p">
                Portrayed by: {portrayed}
              </Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}