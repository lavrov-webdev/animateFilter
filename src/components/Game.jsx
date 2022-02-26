import { motion } from 'framer-motion';
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-color: red;
  border-radius: 15px;
  background-color: var(--semi-dark);
  overflow: hidden;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  margin-bottom: 15px;
`;
const Content = styled.div`
  padding: 1rem .7rem;
`;
const Title = styled.h4`
  font-size: 1.5rem;
  color: var(--white);
  font-weight: 800;
`;

const Game = ({game}) => {
  return (
    <Wrapper layout>
      <Image src={game.background_image} />
      <Content>
        <Title>{game.name}</Title>
      </Content>
    </Wrapper>
  )
};


export default Game;
