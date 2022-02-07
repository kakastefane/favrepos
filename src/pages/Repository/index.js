import React, { useState, useEffect } from 'react';
import { About, BackButton, Container, Loading, Owner, RepoInfos, Title, Topics } from './styles';

import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';

export default function Repository({ match }) {

  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load() {
      const repoName = decodeURIComponent(match.params.repository);

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      setLoading(false);

    }

    load()

  }, [match.params.repository]);

  if (loading) {
    return (
      <Container>
        <Loading>
          Loading, please wait.
        </Loading>
      </Container>
    )
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft />
      </BackButton>
      <RepoInfos>
        <Title>{repository.name}</Title>
        <Owner>
          by <img src={repository.owner.avatar_url} alt={repository.owner.login} /> {repository.owner.login}
        </Owner>
        <About>
          {repository.description}
        </About>
        <Topics>
          {repository.topics.map(topic => (
            <span key={topic}>{topic}</span>
          ))}
        </Topics>
      </RepoInfos>
    </Container>
  )
}