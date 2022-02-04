import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: .25rem;
  background-color: var(--color-light-var);
  box-shadow: 0 0 4rem var(--color-light-shadow);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    flex: 1;
    width: 100%;
    height: 3rem;
    border-radius: 1.5rem;
    padding: 0 1.5rem;
    border: 1px solid var(--color-light);
    background-color: var(--color-light);
    transition: background-color .3s;

    &:focus {
      background-color: var(--color-light-alt);
    }
  }
  `;

const animateSpinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonSubmit = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark);
  border: none;
  border-radius: 1.5rem;
  color: var(--color-light);
  transition: background-color .3s;

  &[disabled] {
    cursor: not-allowed;
  }
  
  ${props => props.loading &&
    css`
      svg {
        animation: ${animateSpinner} 2s linear infinite;
      }
    `
  }

  &:hover {
    background-color: var(--color-dark-var);
  }
`;

export const List = styled.ul`
  padding-top: 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;
export const RepoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .1rem;

  h1 {
    font-size: 1rem;
    color: var(--color-dark);
  }
`;
export const RepoAuthor = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    padding: 2px;
    border: 2px solid var(--color-light);
    border-radius: 1rem;
    margin-right: .5rem;
  }
`;
export const RepoStars = styled.div`
  font-size: 0.75rem;
  background-color: var(--color-light);
  padding: .3rem .75rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  gap: .3rem;
`;
export const RepoDescription = styled.div`
  font-size: 0.75rem;
`;
export const RepoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .date {
    font-size: .75rem
  }

  a {
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem 1rem;
    background-color: var(--color-dark);
    border-radius: 1.5rem;
    font-size: .75rem;
    color: var(--color-light-var);
    text-decoration: none;
    transition: background-color .3s;

    &:hover {
      background-color: var(--color-dark-var);
    }

    svg {
      font-size: 1rem;
    }
  }
`;