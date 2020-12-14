import React from 'react';
// Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
// redux
import {useDispatch} from 'react-redux';
import {loadDetails} from '../actions/detailsAction';
import {Link} from 'react-router-dom';
import {smallImage, formatDate} from '../data/helpers';
// Animations
import {popUp} from '../data/animations';


const Game = ({name, released, image, id}) => {
    const stringPathId = id.toString();
    // Load detail Handler
    const dispatch = useDispatch();
    const loadDetailsHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetails(id));
    }

    return(
        <StyledGame variants={popUp} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailsHandler} >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`} >{name}</motion.h3>
                <p>{ formatDate(released) }</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
            </Link>
        </StyledGame>
    )
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    max-height: 50vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 0.6rem;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    h3 {
        padding-bottom: 0.3rem;
    }
    p {
        font-size: 0.8rem;
        padding-bottom: 1rem;
    }
`;


export default Game;