import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: .25rem;
  background-color: var(--color-light-var);
  box-shadow: 0 0 4rem var(--color-light-shadow);
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: -1.25rem;
  left: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  background-color: var(--color-dark);
  color: var(--color-white);
  transition: background-color .3s;
  transform: translateX(-50%);

  &:hover {
    background-color: var(--color-dark-var); 
  }
`;

export const RepoInfos = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--color-dark);
`;

export const Owner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  margin-bottom: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 1.5rem;
  }
`;

export const About = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

export const Topics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  margin-top: 1rem;

  span {
    display: flex;
    padding: .5rem .75rem;
    background-color: var(--color-dark);
    color: var(--color-white);
    font-size: .75rem;
    border-radius: 1rem;
  }
`;