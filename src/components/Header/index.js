import React from 'react';

import { FaGithub } from 'react-icons/fa';

import { Container, Title, Text } from './styles'

export default function Credits() {
  return (
    <Container>
      <Title to="/">
        <FaGithub size={32} />
        FavRepos
      </Title>
      <Text>
        Save your favorite Github's repositories
      </Text>
    </Container>
  )
}