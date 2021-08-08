import React, {useEffect} from 'react'
import CharacterDetails from '../components/CharacterDetails'
import Grid from '@material-ui/core/Grid'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../store/actionCreators';
import CharacterPicture from '../components/CharcterPicture';


export default function Character() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { name, char_id, img, ...rest } = useSelector ((state)=> state.character)
    useEffect(() => {
        if(!char_id || id!== char_id) {
            dispatch(getCharacter(id))
        }
        
    }, [dispatch, id, char_id])

    return (
        <Grid container direction="row" alignItems="flex-start">  
            <CharacterPicture img={img} name={name} />
            <CharacterDetails details={rest}  />
        </Grid>
    )
}
