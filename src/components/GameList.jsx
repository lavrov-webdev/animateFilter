import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { useFilteredGames } from '../hooks';
import { useGetGamesQuery } from '../redux/games-api';
import Game from './Game';

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  width: calc(100% - 400px);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

const GameList = () => {

  const [ results, isLoading ] = useFilteredGames();

  if (isLoading) return <div>Loading</div>
  return (
    <Content layout>
      {results.map((game) => <Game key={game.name} game={game}/>)}
    </Content>
  )
}

export default GameList