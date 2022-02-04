import React, { useState, useCallback } from 'react';

import { format, parseISO } from 'date-fns';

import { FaPlus, FaSpinner, FaStar } from 'react-icons/fa';
import { Container, Form, ButtonSubmit, List, RepoAuthor, RepoHeader, ListItem, RepoStars, RepoDescription, RepoFooter } from './styles'

import api from '../../services/api';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    async function submit() {
      setLoading(true);

      try {
        const response = await api.get(`repos/${newRepo}`);
        const data = {
          id: response.data.id,
          name: response.data.name,
          fullName: response.data.full_name,
          description: response.data.description,
          lastUpdate: format(parseISO(response.data.updated_at), 'PPpp'),
          stars: response.data.stargazers_count,
          owner: {
            avatar: response.data.owner.avatar_url,
            login: response.data.owner.login
          }
        }
        setRepositories([...repositories, data]);
        setNewRepo('');
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    submit();
  }, [newRepo, repositories]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder='Repository name'
          value={newRepo}
          onChange={handleInputChange}
        />

        <ButtonSubmit loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner size={16} />
          ) : (
            <FaPlus size={16} />
          )}
        </ButtonSubmit>
      </Form>

      <List>
        {repositories.map(repo => (
          <ListItem key={repo.id}>
            <RepoHeader>
              <RepoAuthor>
                <img src={repo.owner.avatar} alt={repo.owner.login} />
                {repo.owner.login}
                <h1>/{repo.name}</h1>
              </RepoAuthor>
              <RepoStars>
                <FaStar />
                {repo.stars}
              </RepoStars>
            </RepoHeader>
            <RepoDescription>
              {repo.description}
            </RepoDescription>
            <RepoFooter>
              <span className="date">
                Last update at {repo.lastUpdate}
              </span>
              <a href="/" title="More details">
                More details
              </a>
            </RepoFooter>
          </ListItem>
        ))}
      </List>

    </Container>
  )
}