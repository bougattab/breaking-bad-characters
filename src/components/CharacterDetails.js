import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import dayjs from 'dayjs'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 20
  },
 
}));


const fieldNamesMap = {
  status: 'Status',
  nickname: 'Nickname',
  appearance: 'Appearance',
  portrayed: 'Portrayed by',
  category: 'Category',
}

  
  export default function CharcterDetails({details}) {
    const classes = useStyles();


    
    return (
      <Grid xs={6} item direction="column">
        <Paper className={classes.paper}>
          <List>
            <ListItem>
              <ListItemText primary={<b>Birthday</b>} secondary={details.birthday !== 'Unknown' ? dayjs(details.birthday).format("MMMM DD, YYYY") : details.birthday} />
            </ListItem>
            {Object.keys(fieldNamesMap).map((key) =>(
              <ListItem>
              <ListItemText primary={<b>{fieldNamesMap[key]}</b>} secondary={details[key]} />
            </ListItem>
            ))}
          { details.occupation && <ListItem>
              
                <ListItemText primary={<b>Occupation</b>} secondary={<div>{details.occupation.map((occupation) => (<p>{occupation}</p>))}</div>} />
              
            </ListItem>}
            { details.better_call_saul_appearance && <ListItem>
              
                <ListItemText primary={<b>Better call saul appearance</b>} secondary={<div>{details.better_call_saul_appearance.reduce((acc, value) => (acc + ', '+ value), '')}</div>} />
              
            </ListItem>}
          </List>
        </Paper>
        
      </Grid>
    )
}
