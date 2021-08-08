import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { getCharacters } from '../store/actionCreators';
import Grid from '@material-ui/core/Grid'
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    title:{
        marginLeft:5,
        color: 'green'
    },
    pagination: {
        margin: 20
    }
  }));

const CHARACTER_PER_PAGE = 8

export default function Home() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const characters = useSelector ((state)=> state.characters)
    const [displayedCharcharters, setDisplayedCharacters] = useState(characters.slice((page-1)*CHARACTER_PER_PAGE, page*CHARACTER_PER_PAGE))
    const classes = useStyles();

    const handlePaginate = (e, p) => {
        setPage(p)
    }

    useEffect(() => {
        if(!characters.length) {
            dispatch(getCharacters())
        } else {
            setDisplayedCharacters(characters.slice((page-1)*CHARACTER_PER_PAGE, page*CHARACTER_PER_PAGE))
        }
        
    }, [dispatch,characters, page])
    return (
        <Grid container  direction="column" alignContent="center" >
            <Grid container xs={11}  direction="row" justifyContent="center">
                <h1 className={classes.title}> Breaking Bad Characters </h1>
            </Grid>

            <Grid container xs={11}  direction="row" justifyContent="center">
                <Pagination className={classes.pagination} page={page} onChange={handlePaginate} count={Math.floor(characters.length/CHARACTER_PER_PAGE)} color="primary" />
            </Grid>
   
            <Grid container  direction="row" alignItems="center" xs={11}>
                {displayedCharcharters.map((character, index) => <CharacterCard character ={character} key={index} />)}
            </Grid>
            
        </Grid>

    )
}
