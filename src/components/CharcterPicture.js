import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20
  },
  img:{
    width:250,
    height:250
  }
 
}));




  
  export default function CharacterPicture({img, name}) {
    const classes = useStyles();
    const history = useHistory();



    
    return (
      <Grid className={classes.root} xs={3} container direction="column" alignItems="center" justifyContent="center">
          <img className={classes.img} alt="characterImg" src={img} />
          <h4>{name}</h4>
          <Link onClick={() => history.push('/')}>back to characters page</Link>
      </Grid>
    )
}
