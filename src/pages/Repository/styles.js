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

export const IssuesList = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;

  li {
    padding: 1rem;
    background-color: var(--color-light);
    border-radius: .5rem;
  }
`;
export const IssueAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: .75rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
  }
`;
export const IssueTitle = styled.h3`
  margin: 0;
  padding: .5rem 0;
  font-size: 1rem;
  a {
    color: var(--color-dark);
    text-decoration: none;
  }
`;
export const IssueLabels = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  span {
    display: flex;
    padding: .3rem .5rem;
    background-color: var(--color-text);
    color: var(--color-white);
    font-size: .75rem;
    border-radius: 1rem;
  }
`;

export const PagesNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  button {
    border: none;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: .875rem;
    padding: .5rem 1rem;
    background-color: var(--color-dark);
    color: var(--color-light);
    transition: background-color .3s, opacity .3s;

    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }

    &:hover {
      background-color: var(--color-dark-var);
    }
  }
`;

export const FilterNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  h2 {
    color: var(--color-dark);
    font-size: 1.25rem;
  }

  span {
    display: flex;
    gap: .5rem;
  }

  button {
    border: none;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: .875rem;
    padding: .5rem 1rem;
    background-color: var(--color-dark-var);
    color: var(--color-light);
    transition: background-color .3s;

    &:hover {
      background-color: var(--color-dark);
    }

    &:nth-child(${props => props.active + 1}) {
      background-color: var(--color-dark);
    }
  }
`;

export const WithoutIssue = styled.h2`
  font-size: 1.25rem;
  color: var(--color-dark);
  text-align: center;
  margin-top: 3rem;
`;