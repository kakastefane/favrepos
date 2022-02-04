import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: .75rem;
  color: var(--color-dark);
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 0.875rem;
`;